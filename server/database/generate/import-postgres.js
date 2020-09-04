const path = require('path');
const db = require('../postgresql/client.js');
const utils = require('./utils');
const config = require('../../config/generate.js');

const dropTable = () => {
  const q = 'DROP TABLE IF EXISTS hostels';
  return db.query(q);
};

const createTable = () => {
  const q = `CREATE TABLE hostels (
  id SERIAL NOT NULL,
  hostel_name VARCHAR(64) NOT NULL,
  editorial_text_one TEXT NOT NULL,
  editorial_text_two TEXT NOT NULL,
  description_text_one TEXT NOT NULL,
  description_text_two TEXT NOT NULL,
  description_text_three TEXT NOT NULL,
  check_in_start TIME NOT NULL,
  check_in_end TIME NOT NULL,
  check_out TIME NOT NULL,
  kid_friendly SMALLINT NOT NULL,
  credit_cards SMALLINT NOT NULL,
  age_restriction SMALLINT NOT NULL,
  curfew SMALLINT NOT NULL,
  lock_out SMALLINT NOT NULL,
  non_smoking SMALLINT NOT NULL,
  pet_friendly SMALLINT NOT NULL,
  taxes_included SMALLINT NOT NULL,
  cancellation VARCHAR(500) NOT NULL,
  important_notes_one TEXT NOT NULL,
  important_notes_two TEXT NOT NULL,
  important_notes_three TEXT NOT NULL,
  important_notes_four TEXT NOT NULL,
  important_notes_five TEXT NOT NULL,
  street_address VARCHAR(100) NOT NULL,
  city VARCHAR(64) NOT NULL,
  state CHAR(32) NOT NULL,
  zip INT NOT NULL,
  country CHAR(64) NOT NULL,
  country_code CHAR(5) NOT NULL,
  latitude DECIMAL(11, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  PRIMARY KEY (id)
  )`;
  return db.query(q);
};

const copyTable = () => {
  const columns = Object.keys(utils.getRecord());
  const filepath = path.resolve(__dirname, '..', '..', '..', config.folder, config.filename);
  const q = `COPY hostels (${columns.join(',')}) FROM '${filepath}'
  WITH (FORMAT csv, DELIMITER ',', HEADER TRUE, QUOTE '"', ESCAPE '\\')`;
  return db.query(q);
};

const importData = () => {
  const start = Date.now();
  const measure = () => {
    const end = Date.now();
    const elapsed = (end - start) / 1000;
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
    console.log(`The script uses ~ ${Math.round(used * 100) / 100} MB`);
    console.log(`Completed in ${elapsed} seconds.`);
  };
  dropTable()
    .then(createTable)
    .then(copyTable)
    .then((results) => {
      measure();
      console.log('Import success:', results);
      const count = results.rowCount;
      console.log(`Imported ${count} records.`);
    })
    .catch((error) => {
      measure();
      console.log('Import error:', error);
    });
};

importData();
