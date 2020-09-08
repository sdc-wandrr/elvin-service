const fs = require('fs');
const path = require('path');
const csvStringifier = require('csv-writer').createObjectCsvStringifier;
const utils = require('./utils');
const config = require('../../config/generate.js');

const getBatch = (counter, size, map = (input) => input) => {
  // const start = Date.now();
  const records = [];
  for (let id = counter; id <= (counter + size); id += 1) {
    const record = utils.getRecord(id);
    records.push(map(record));
  }
  // const end = Date.now();
  // const elapsed = (end - start) / 1000;
  // console.log(`Generated ${size} records in ${elapsed} seconds.`);
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
  let counter = 1;
  let elapsed = 0;
  const write = () => {
    const start = Date.now();
    const data = stringifier.stringifyRecords(getBatch(counter, batchSize));
    const end = Date.now();
    elapsed += (end - start) / 1000;
    if (counter === count + 1) {
      stream.end((error) => (callback(error, elapsed)));
    } else if (counter === 1) {
      counter += batchSize;
      const header = stringifier.getHeaderString();
      stream.write(`${header}${data}`, write);
    } else {
      counter += batchSize;
      stream.write(data, write);
    }
  };
  write();
};

const test = () => {
  const timeit = (count, batchSize, generator) => {
    const start = Date.now();
    const measure = (genElapsed) => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      const used = process.memoryUsage().heapUsed / 1024 / 1024;
      console.log(`The script used ~ ${Math.round(used * 100) / 100} MB`);
      console.log(`Data generation completed in ${genElapsed} seconds.`);
      console.log(`Data commit completed in ${elapsed - genElapsed} seconds.`);
      console.log(`Total time to complete the operation was ${elapsed} seconds.`);
    };
    generator(count, batchSize, (error, elapsed) => {
      measure(elapsed);
      if (error) {
        console.log('Generator error:', error);
      } else {
        console.log(`Generated and committed ${count} records.`);
      }
    });
  };
  const count = 10000000;
  const batchSize = 1000;
  timeit(count, batchSize, generateData);
};

test();