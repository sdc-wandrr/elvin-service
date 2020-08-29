const fs = require('fs');
const path = require('path');
const createWriter = require('csv-writer').createObjectCsvWriter;
const helpers = require('./generator-helpers');

const getBatch = (size, map = (input) => input) => {
  const records = [];
  for (let i = 0; i < size; i += 1) {
    const record = helpers.getRecord();
    records.push(map(record));
  }
  return records;
};

const getWritableJSONStream = () => {
  const destination = path.resolve(__dirname, '..', '..', 'temp', 'data.json');
  return fs.createWriteStream(destination);
};

const getWritableCSVStream = () => {
  const destination = path.resolve(__dirname, '..', '..', 'temp', 'data.csv');
  const writer = createWriter({
    path: destination,
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
  return writer;
};

const generateJSON = (count, batchSize, callback) => {
  const stream = getWritableJSONStream();
  let counter = count;
  const write = () => {
    let ready = true;
    while (ready) {
      const data = getBatch(batchSize, JSON.stringify);
      if (counter === count) {
        ready = stream.write(`[${data.join(',')},`);
        counter -= batchSize;
      } else if (counter === 0) {
        stream.end(']', callback);
        ready = false;
        return;
      } else if (counter - batchSize === 0) {
        ready = stream.write(`${data.join(',')}`);
        counter -= batchSize;
      } else {
        ready = stream.write(`${data.join(',')},`);
        counter -= batchSize;
      }
    }
    if (counter >= 0) {
      stream.once('drain', write);
    }
  };
  write();
};

const generateCSV = (count, batchSize, callback) => {
  const stream = getWritableCSVStream();
  let counter = count;
  const results = [];
  while (counter > 0) {
    const batch = stream.writeRecords(getBatch(batchSize));
    results.push(batch);
    counter -= batchSize;
  }
  Promise.all(results)
    .then((records) => {
      callback(null, records);
    })
    .catch((error) => {
      callback(error, null);
    });
};

const test = () => {
  const timeit = (count, batchSize, generator) => {
    const start = Date.now();
    generator(count, batchSize, (error) => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      if (error) {
        console.log(`An error occured in ${generator.name}:`, error);
      } else {
        console.log(`Generated ${count} records in ${elapsed} seconds.`);
      }
    });
  };
  const count = 10000;
  const batchSize = 1000;
  // timeit(count, batchSize, generateJSON);
  timeit(count, batchSize, generateCSV);
};

test();