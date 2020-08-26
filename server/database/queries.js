/* eslint-disable arrow-body-style */
const db = require('./database.js');

const query = (queryStr, args, callback) => {
  db.query(queryStr, args, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

module.exports = {

  getHouseInfoByHostelID(id, callback) {
    const queryStr = 'SELECT * FROM hostels WHERE (id = ?)';
    query(queryStr, [id], callback);
  },

  getHouseRules(id, callback) {
    const queryStr = 'SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ? AND r.id = fl.rules_id';
    query(queryStr, [id], callback);
  },

  getHouseAddress(id, callback) {
    const queryStr = 'SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ? AND a.id = fl.addresses_id';
    query(queryStr, [id], callback);
  },

  getHouseDescription(id, callback) {
    const queryStr = 'SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ? AND d.id = fl.descriptions_id';
    query(queryStr, [id], callback);
  },
};
