const path = require('path');
const { exec } = require('child_process');
const db = require('../cassandra/client.js');
const utils = require('./utils');
const config = require('../../config/generate.js');

const dropKeySpace = () => {
  const q = 'DROP KEYSPACE IF EXISTS hostel';
  return db.execute(q);
};

const createKeySpace = () => {
  const q = `CREATE KEYSPACE hostel WITH replication = {
    'class': 'SimpleStrategy',
    'replication_factor': 1 }`;
  return db.execute(q);
};

const useKeySpace = () => {
  const q = 'USE hostel';
  return db.execute(q);
};

const dropTable = () => {
  const q = 'DROP TABLE IF EXISTS hostels';
  return db.execute(q);
};

const createTable = () => {
  const q = `CREATE TABLE hostel.hostels (
  id INT,
  hostel_name VARCHAR,
  editorial_text_one TEXT,
  editorial_text_two TEXT,
  description_text_one TEXT,
  description_text_two TEXT,
  description_text_three TEXT,
  check_in_start TIME,
  check_in_end TIME,
  check_out TIME,
  kid_friendly SMALLINT,
  credit_cards SMALLINT,
  age_restriction SMALLINT,
  curfew SMALLINT,
  lock_out SMALLINT,
  non_smoking SMALLINT,
  pet_friendly SMALLINT,
  taxes_included SMALLINT,
  cancellation VARCHAR,
  important_notes_one TEXT,
  important_notes_two TEXT,
  important_notes_three TEXT,
  important_notes_four TEXT,
  important_notes_five TEXT,
  street_address VARCHAR,
  city VARCHAR,
  state VARCHAR,
  zip INT,
  country VARCHAR,
  country_code VARCHAR,
  latitude DECIMAL,
  longitude DECIMAL,
  PRIMARY KEY (id)
  )`;
  return db.execute(q);
};

const loadTableData = () => {
  const columns = Object.keys(utils.getRecord());
  const filepath = path.resolve(__dirname, '..', '..', '..', config.folder, config.filename);
  const q = `COPY hostels (${columns.join(',')}) FROM '${filepath}'
  WITH (FORMAT csv, DELIMITER ',', HEADER TRUE, QUOTE '"', ESCAPE '\\')`;
  return db.execute(q);
};

const bulkLoadTableData = () => {
  const filepath = path.resolve(__dirname, '..', '..', '..', config.folder, config.filename);
  const command = `dsbulk load -url ${filepath} -k hostel -t hostels -h 'localhost' -header true`;
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout, stderr);
    });
  });
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
  dropKeySpace()
    .then(createKeySpace)
    .then(useKeySpace)
    .then(dropTable)
    .then(createTable)
    .then(bulkLoadTableData)
    .then((results, results2) => {
      measure();
      console.log('Import success:', results, results2);
      // const count = results.rowCount;
      // console.log(`Imported ${count} records.`);
    })
    .catch((error) => {
      measure();
      console.log('Import error:', error);
    });
};

importData();
