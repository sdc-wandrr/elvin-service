/* eslint-disable arrow-body-style */
const db = require('./database.js');

module.exports = {

  getHouseInfoByHostelID(id, callback) {
    console.log(id, 'id in DB query')
    const queryStr = `SELECT * FROM hostels WHERE (id = ${id})`;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        console.log(data, 'data in db callback');
        callback(null, data);
      }
    });
  },

  getRulesByID(id, callback) {
    const queryStr = null; // WRITE QUERYSTRING FOR GETTING ALL RULES HERE;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getAddressByID(id, callback) {
    const queryStr = null; // WRITE QUERYSTRING FOR GETTING ADDRESS HERE;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getDescriptionByID(id, callback) {
    const queryStr = null; // WRITE QUERYSTRING FOR GETTING ALL DESCRIPTION HERE;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getFullListingByID(id, callback) {
    const queryStr = null; // WRITE QUERYSTRING FOR GETTING FULLLISTING HERE;
    db.query(queryStr, (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

};
