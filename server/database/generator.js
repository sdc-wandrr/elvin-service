const fs = require('fs');
const path = require('path');
const csvStringifier = require('csv-writer').createObjectCsvStringifier;
const helpers = require('./generator-helpers');

const getBatch = (size, map = (input) => input) => {
  const records = [];
  for (let i = 0; i < size; i += 1) {
    const record = helpers.getRecord();
    records.push(map(record));
  }
  return records;
};

const getWritableStream = (filename) => {
  const destination = path.resolve(__dirname, '..', '..', 'temp', filename);
  return fs.createWriteStream(destination, { highWaterMark: 1048576 });
};

const getCSVStringifier = () => {
  const stringifier = csvStringifier({
    header: [
      { id: 'name', title: 'name' },
      { id: 'curfew', title: 'curfew' },
      { id: 'cancellation', title: 'cancellation' },
      { id: 'check_in_start', title: 'check_in_start' },
      { id: 'check_in_end', title: 'check_in_end' },
      { id: 'check_out', title: 'check_out' },
      { id: 'kid_friendly', title: 'kid_friendly' },
      { id: 'credit_cards', title: 'credit_cards' },
      { id: 'age_restriction', title: 'age_restriction' },
      { id: 'lock_out', title: 'lock_out' },
      { id: 'non_smoking', title: 'non_smoking' },
      { id: 'pet_friendly', title: 'pet_friendly' },
      { id: 'taxes_included', title: 'taxes_included' },
      { id: 'important_notes_one', title: 'important_notes_one' },
      { id: 'important_notes_two', title: 'important_notes_two' },
      { id: 'important_notes_three', title: 'important_notes_three' },
      { id: 'important_notes_four', title: 'important_notes_four' },
      { id: 'important_notes_five', title: 'important_notes_five' },
      { id: 'city', title: 'city' },
      { id: 'state', title: 'state' },
      { id: 'zip', title: 'zip' },
      { id: 'country', title: 'country' },
      { id: 'latitude', title: 'latitude' },
      { id: 'longitude', title: 'longitude' },
      { id: 'street_address', title: 'street_address' },
      { id: 'country_code', title: 'country_code' },
      { id: 'editorial_text_one', title: 'editorial_text_one' },
      { id: 'editorial_text_two', title: 'editorial_text_two' },
      { id: 'description_text_one', title: 'description_text_one' },
      { id: 'description_text_two', title: 'description_text_two' },
      { id: 'description_text_three', title: 'description_text_three' },
    ],
  });
  return stringifier;
};

const generateData = (count, batchSize, callback) => {
  const stream = getWritableStream('data.csv');
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
  const count = 10000;
  const batchSize = 100;
  timeit(count, batchSize, generateData);
};

test();