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
  let elapsed = 0;
  const write = () => {
    const start = Date.now();
    const data = stringifier.stringifyRecords(getBatch(batchSize));
    const end = Date.now();
    elapsed += (end - start) / 1000;
    if (counter === 0) {
      console.log(`Generated ${count} records in ${elapsed} seconds.`);
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
    const measure = () => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script used ~ ${Math.round(used * 100) / 100} MB`);
      console.log(`Completed in ${elapsed} seconds.`);
    };
    generator(count, batchSize, (error) => {
      measure();
      if (error) {
        console.log('Generator error:', error);
      } else {
        console.log(`Generated and commited ${count} records.`);
      }
    });
  };
  const count = 1000000;
  const batchSize = 1000;
  timeit(count, batchSize, generateData);
};

test();