const db = require('./client.js');

const getRecordById = (id) => {
  const q = 'SELECT * FROM hostels WHERE id = ?';
  return db.execute(q, [id]);
};

module.exports.getRecordById = getRecordById;
