const fs = require('fs');
const path = require('path');
const csvStringifier = require('csv-writer').createObjectCsvStringifier;
const utils = require('./utils');
const config = require('../../config/generate.js');

const getBatch = (size, map = (input) => input) => {
  const records = [];
  for (let i = 0; i < size; i += 1) {
    const record = utils.getRecord();
    records.push(map(record));
  }
  return records;
};

const getWritableStream = () => {
  const destination = path.resolve(__dirname, '..', '..', '..', config.folder, config.filename);
  return fs.createWriteStream(destination, { highWaterMark: 1048576 });
};

const getCSVStringifier = () => {
  const sample = utils.getRecord();
  const columns = Object.keys(sample);
  const stringifier = csvStringifier({
    header: columns.map((column) => ({ id: column, title: column })),
  });
  return stringifier;
};

const generateData = (count, batchSize, callback) => {
  const stream = getWritableStream();
  const stringifier = getCSVStringifier();
  let counter = count;
  const write = () => {
    const data = stringifier.stringifyRecords(getBatch(batchSize));
    if (counter === 0) {
      stream.end(callback);
    } else if (counter === count) {
      counter -= batchSize;
      const header = stringifier.getHeaderString();
      stream.write(`${header}${data}`, write);
    } else {
      counter -= batchSize;
      stream.write(data, write);
    }
  };
  write();
};

const test = () => {
  const timeit = (count, batchSize, generator) => {
    const start = Date.now();
    generator(count, batchSize, (error) => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script uses ~ ${Math.round(used * 100) / 100} MB`);
      if (error) {
        console.log(`An error occured in ${generator.name}:`, error);
      } else {
        console.log(`Generated ${count} records in ${elapsed} seconds.`);
      }
    });
  };
  const count = 10;
  const batchSize = 10;
  timeit(count, batchSize, generateData);
};

test();