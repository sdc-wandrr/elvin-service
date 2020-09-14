const db = require('./client.js');

const getRecordsByIdRange = (id, range = 100) => {
  const query = 'SELECT * FROM hostels WHERE id > $1 AND id < $2';
  const mid = Math.floor(range / 2);
  const start = Number(id) - mid;
  const end = Number(id) + mid;
  const q = {
    name: 'record-by-id',
    text: query,
    values: [start, end],
  };
  return db.query(q);
};

const getRecordById = (id) => {
  const query = 'SELECT * FROM hostels WHERE id = $1';
  const q = {
    name: 'record-by-id',
    text: query,
    values: [id],
  };
  return db.query(q);
};

const getHostelById = (id) => {
  const query = 'SELECT hostel_name FROM hostels WHERE id = $1';
  const q = {
    name: 'hostel-by-id',
    text: query,
    values: [id],
  };
  return db.query(q);
};

const getAddressByHostelId = (id) => {
  const query = `SELECT street_address, city, state, zip, country,
  country_code, latitude, longitude FROM hostels WHERE id = $1`;
  const q = {
    name: 'address-by-hostel-id',
    text: query,
    values: [id],
  };
  return db.query(q);
};

const getRulesByHostelId = (id) => {
  const query = `SELECT check_in_start, check_in_end, check_out,
  kid_friendly, credit_cards, age_restriction, curfew,
  lock_out, non_smoking, pet_friendly, taxes_included,
  cancellation, important_notes_one, important_notes_two,
  important_notes_three, important_notes_four, important_notes_five
  FROM hostels WHERE id = $1`;
  const q = {
    name: 'rules-by-hostel-id',
    text: query,
    values: [id],
  };
  return db.query(q);
};

const getDescriptionByHostelId = (id) => {
  const query = `SELECT editorial_text_one, editorial_text_two,
  description_text_one, description_text_two, description_text_three
  FROM hostels WHERE id = $1`;
  const q = {
    name: 'description-by-hostel-id',
    text: query,
    values: [id],
  };
  return db.query(q);
};

module.exports.getRecordsByIdRange = getRecordsByIdRange;
module.exports.getRecordById = getRecordById;
module.exports.getHostelById = getHostelById;
module.exports.getAddressByHostelId = getAddressByHostelId;
module.exports.getRulesByHostelId = getRulesByHostelId;
module.exports.getDescriptionByHostelId = getDescriptionByHostelId;
