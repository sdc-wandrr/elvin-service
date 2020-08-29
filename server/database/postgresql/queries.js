const db = require('./client.js');

const getRecordById = (id) => {
  const q = 'SELECT * FROM hostels WHERE id = $1';
  return db.query(q, [id]);
};

module.exports.getRecordById = getRecordById;
