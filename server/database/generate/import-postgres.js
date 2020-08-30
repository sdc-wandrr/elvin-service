const path = require('path');
const db = require('../postgresql/client.js');
const config = require('../../config/postgresql.js');

const dropTable = () => {
  const q = 'DROP TABLE IF EXISTS hostels';
  return db.query(q);
};

const createTable = () => {
  const q = `CREATE TABLE hostels (
  id INT NOT NULL AUTO_INCREMENT,
  hostel_name VARCHAR(50) NOT NULL,
  editorial_text_one TEXT NOT NULL,
  editorial_text_two TEXT NOT NULL,
  description_text_one TEXT NOT NULL,
  description_text_two TEXT NOT NULL,
  description_text_three TEXT NOT NULL,
  check_in_start TIME NOT NULL,
  check_in_end TIME NOT NULL,
  check_out TIME NOT NULL,
  kid_friendly TINYINT(1) NOT NULL,
  credit_cards TINYINT(1) NOT NULL,
  age_restriction TINYINT(1) NOT NULL,
  curfew TINYINT(1) NOT NULL,
  lock_out TINYINT(1) NOT NULL,
  non_smoking TINYINT(1) NOT NULL,
  pet_friendly TINYINT(1) NOT NULL,
  taxes_included TINYINT(1) NOT NULL,
  cancellation VARCHAR(500) NOT NULL,
  important_notes_one TEXT NOT NULL,
  important_notes_two TEXT NOT NULL,
  important_notes_three TEXT NOT NULL,
  important_notes_four TEXT NOT NULL,
  important_notes_five TEXT NOT NULL,
  street_address VARCHAR(100) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state CHAR(25) NOT NULL,
  zip MEDIUMINT(5) NOT NULL,
  country CHAR(50) NOT NULL,
  country_code CHAR(5) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  name_id SMALLINT NOT NULL,
  descriptions_id SMALLINT NOT NULL,
  rules_id SMALLINT NOT NULL,
  addresses_id SMALLINT NOT NULL,
  PRIMARY KEY (id)
  )`;
  return db.query(q);
};

const copyTable = () => {
  const q = `COPY hostels FROM $1
  WITH FORMAT csv, DELIMITER ',', HEADER TRUE, QUOTE '"', ESCAPE '\\'`;
  const filepath = path.resolve(__dirname, '..', '..', '..', config.folder, config.filename);
  return db.query(q, [filepath]);
};

const importData = () => {
  dropTable()
    .then(createTable)
    .then(copyTable)
    .then((results) => {
      console.log('import success:', results);
    })
    .catch((error) => {
      console.log('import error:', error);
    });
};

importData();
