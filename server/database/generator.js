const fs = require('fs');
const path = require('path');
const helpers = require('./generator-helpers');

const getWritableStream = () => {
  const destination = path.resolve(__dirname, '..', '..', 'temp', 'data.json');
  return fs.createWriteStream(destination);
};

const generateRecords = (count, callback) => {
  const stream = getWritableStream();
  let i = count;
  const write = () => {
    let ready = true;
    while (i > 0 && ready) {
      //console.log('counter at:', i);
      const record = helpers.getRecord();
      if (i === count) {
        const line = `[${JSON.stringify(record)},`;
        ready = stream.write(line);
      } else if (i === 1) {
        const line = `${JSON.stringify(record)}]`;
        stream.end(line, callback);
        return;
      } else {
        const line = `${JSON.stringify(record)},`;
        ready = stream.write(line);
      }
      i -= 1;
    }
    if (i > 0) {
      stream.once('drain', write);
    }
  };
  write();
};

const test = () => {
  const count = 100000;
  const start = Date.now();
  generateRecords(count, () => {
    const end = Date.now();
    const elapsed = (end - start) / 1000;
    console.log(`Generated ${count} records in ${elapsed} seconds`);
  });
};

test();