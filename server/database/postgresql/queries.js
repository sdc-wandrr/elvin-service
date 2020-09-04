const db = require('./client.js');

const getRecordById = (id) => {
  const q = 'SELECT * FROM hostels WHERE id = $1';
  return db.query(q, [id]);
};

const getHostelById = (id) => {
  const q = 'SELECT hostel_name FROM hostels WHERE id = $1';
  return db.query(q, [id]);
};

const getAddressByHostelId = (id) => {
  const q = `SELECT street_address, city, state, zip, country,
  country_code, latitude, longitude FROM hostels WHERE id = $1`;
  return db.query(q, [id]);
};

const getRulesByHostelId = (id) => {
  const q = `SELECT check_in_start, check_in_end, check_out,
  kid_friendly, credit_cards, age_restriction, curfew,
  lock_out, non_smoking, pet_friendly, taxes_included,
  cancellation, important_notes_one, important_notes_two,
  important_notes_three, important_notes_four, important_notes_five
  FROM hostels WHERE id = $1`;
  return db.query(q, [id]);
};

const getDescriptionByHostelId = (id) => {
  const q = `SELECT editorial_text_one, editorial_text_two,
  description_text_one, description_text_two, description_text_three
  FROM hostels WHERE id = $1`;
  return db.query(q, [id]);
};

module.exports.getRecordById = getRecordById;
module.exports.getHostelById = getHostelById;
module.exports.getAddressByHostelId = getAddressByHostelId;
module.exports.getRulesByHostelId = getRulesByHostelId;
module.exports.getDescriptionByHostelId = getDescriptionByHostelId;
