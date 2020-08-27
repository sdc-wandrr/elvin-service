/* eslint-disable arrow-body-style */
const db = require('./database.js');

const query = (queryStr, args, callback) => {
  db.query(queryStr, args, (err, data) => {
    if (err) {
      console.log('query error:', err);
      callback(err, null);
    } else {
      console.log('query response:', data);
      callback(null, data);
    }
  });
};

// =============== Hostel ===============

const getHouseInfoByHostelID = (id, callback) => {
  const queryStr = 'SELECT * FROM hostels WHERE (id = ?)';
  query(queryStr, [id], callback);
};

const createHouseInfo = (args, callback) => {
  const queryStr = 'INSERT INTO hostels (hostel_name) VALUES (?)';
  query(queryStr, [args.hostel_name], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseInfoByHostelID(data.insertId, callback);
    }
  });
};

const updateHouseInfo = (args, callback) => {
  const queryStr = 'UPDATE hostels SET hostel_name = ? WHERE (id = ?)';
  query(queryStr, [args.hostel_name, args.id], (err) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseInfoByHostelID(args.id, callback);
    }
  });
};

const deleteHouseInfo = (id, callback) => {
  const queryStr = 'DELETE FROM hostels WHERE (id = ?)';
  query(queryStr, [id], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// =============== Rules ===============

const getHouseRules = (id, callback) => {
  const queryStr = 'SELECT * from rules r INNER JOIN full_listing fl ON fl.name_id = ? AND r.id = fl.rules_id';
  query(queryStr, [id], callback);
};

const getHouseRulesByID = (id, callback) => {
  const queryStr = 'SELECT * from rules WHERE id = ?';
  query(queryStr, [id], callback);
};

const createHouseRules = (args, callback) => {
  const queryStr = 'INSERT INTO rules (check_in_start, check_in_end, check_out, kid_friendly, credit_cards, age_restriction, curfew, lock_out, non_smoking, pet_friendly, taxes_included, cancellation, important_notes_one, important_notes_two, important_notes_three, important_notes_four, important_notes_five) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const newArgs = [
    args.check_in_start,
    args.check_in_end,
    args.check_out,
    args.kid_friendly,
    args.credit_cards,
    args.age_restriction,
    args.curfew,
    args.lock_out,
    args.non_smoking,
    args.pet_friendly,
    args.taxes_included,
    args.cancellation,
    args.important_notes_one,
    args.important_notes_two,
    args.important_notes_three,
    args.important_notes_four,
    args.important_notes_five,
  ];
  query(queryStr, newArgs, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseRulesByID(data.insertId, callback);
    }
  });
};

const updateHouseRules = (args, callback) => {
  const queryStr = 'UPDATE rules SET check_in_start = ?, check_in_end = ?, check_out = ?, kid_friendly = ?, credit_cards = ?, age_restriction = ?, curfew = ?, lock_out = ?, non_smoking = ?, pet_friendly = ?,taxes_included = ?, cancellation = ?, important_notes_one = ?, important_notes_two = ?, important_notes_three = ?, important_notes_four = ?, important_notes_five = ? WHERE (id = ?)';
  const newArgs = [
    args.check_in_start,
    args.check_in_end,
    args.check_out,
    args.kid_friendly,
    args.credit_cards,
    args.age_restriction,
    args.curfew,
    args.lock_out,
    args.non_smoking,
    args.pet_friendly,
    args.taxes_included,
    args.cancellation,
    args.important_notes_one,
    args.important_notes_two,
    args.important_notes_three,
    args.important_notes_four,
    args.important_notes_five,
    args.id,
  ];
  query(queryStr, newArgs, (err) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseRulesByID(args.id, callback);
    }
  });
};

const deleteHouseRules = (id, callback) => {
  const queryStr = 'DELETE FROM rules WHERE (id = ?)';
  query(queryStr, [id], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// =============== Address ===============

const getHouseAddress = (id, callback) => {
  const queryStr = 'SELECT * from addresses a INNER JOIN full_listing fl ON fl.name_id = ? AND a.id = fl.addresses_id';
  query(queryStr, [id], callback);
};

const getHouseAddressByID = (id, callback) => {
  const queryStr = 'SELECT * from addresses WHERE id = ?';
  query(queryStr, [id], callback);
};

const createHouseAddress = (args, callback) => {
  const queryStr = 'INSERT INTO addresses (street_address, city, state, zip, country, country_code, latitude, longitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const newArgs = [
    args.street_address,
    args.city,
    args.state,
    args.zip,
    args.country,
    args.country_code,
    args.latitude,
    args.longitude,
  ];
  query(queryStr, newArgs, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseAddressByID(data.insertId, callback);
    }
  });
};

const updateHouseAddress = (args, callback) => {
  const queryStr = 'UPDATE addresses SET street_address = ?, city = ?, state = ?, zip = ?, country = ?, country_code = ?, latitude = ?, longitude = ? WHERE (id = ?)';
  const newArgs = [
    args.street_address,
    args.city,
    args.state,
    args.zip,
    args.country,
    args.country_code,
    args.latitude,
    args.longitude,
    args.id,
  ];
  query(queryStr, newArgs, (err) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseAddressByID(args.id, callback);
    }
  });
};

const deleteHouseAddress = (id, callback) => {
  const queryStr = 'DELETE FROM addresses WHERE (id = ?)';
  query(queryStr, [id], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

// =============== Description ===============

const getHouseDescription = (id, callback) => {
  const queryStr = 'SELECT * from descriptions d INNER JOIN full_listing fl ON fl.name_id = ? AND d.id = fl.descriptions_id';
  query(queryStr, [id], callback);
};

const getHouseDescriptionByID = (id, callback) => {
  const queryStr = 'SELECT * from descriptions WHERE id = ?';
  query(queryStr, [id], callback);
};

const createHouseDescription = (args, callback) => {
  const queryStr = 'INSERT INTO descriptions (editorial_text_one, editorial_text_two, description_text_one, description_text_two, description_text_three) VALUES (?, ?, ?, ?, ?)';
  const newArgs = [
    args.editorial_text_one,
    args.editorial_text_two,
    args.description_text_one,
    args.description_text_two,
    args.description_text_three,
  ];
  query(queryStr, newArgs, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseDescriptionByID(data.insertId, callback);
    }
  });
};

const updateHouseDescription = (args, callback) => {
  const queryStr = 'UPDATE descriptions SET editorial_text_one = ?, editorial_text_two = ?, description_text_one = ?, description_text_two = ?, description_text_three = ? WHERE (id = ?)';
  const newArgs = [
    args.editorial_text_one,
    args.editorial_text_two,
    args.description_text_one,
    args.description_text_two,
    args.description_text_three,
    args.id,
  ];
  query(queryStr, newArgs, (err) => {
    if (err) {
      callback(err, null);
    } else {
      getHouseDescriptionByID(args.id, callback);
    }
  });
};

const deleteHouseDescription = (id, callback) => {
  const queryStr = 'DELETE FROM descriptions WHERE (id = ?)';
  query(queryStr, [id], (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  getHouseInfoByHostelID,
  createHouseInfo,
  updateHouseInfo,
  deleteHouseInfo,
  getHouseRules,
  createHouseRules,
  updateHouseRules,
  deleteHouseRules,
  getHouseAddress,
  createHouseAddress,
  updateHouseAddress,
  deleteHouseAddress,
  getHouseDescription,
  createHouseDescription,
  updateHouseDescription,
  deleteHouseDescription,
};
