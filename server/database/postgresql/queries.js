const db = require('./connect.js');

const getRecordById = (id) => {
  const q = 'SELECT * FROM ';
  return db.query(q, [id]);
};