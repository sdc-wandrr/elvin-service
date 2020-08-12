/* eslint-disable arrow-body-style */
const db = require('./database.js');

module.exports = {

  getHouseInfoByHostelID(id, callback) {
    const queryStr = `SELECT * FROM hostels WHERE (id = ${id})`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getHouseRules(id, callback) {
    const queryStr = `SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ${id} AND r.id = fl.rules_id`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getHouseAddress(id, callback) {
    const queryStr = `SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ${id} AND a.id = fl.addresses_id`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getHouseDescription(id, callback) {
    const queryStr = `SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ${id} AND d.id = fl.descriptions_id`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
};
