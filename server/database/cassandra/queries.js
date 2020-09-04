const db = require('./client.js');

const getRecordById = (id) => {
  const q = 'SELECT * FROM hostel.hostels WHERE id = ?';
  return db.execute(q, [id], { prepare: true });
};

module.exports.getRecordById = getRecordById;
