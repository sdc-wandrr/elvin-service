const client = require('./client');

const set = (key, val) => new Promise((resolve, reject) => {
  client.set(key, val, (error, reply) => {
    if (error) {
      reject(error);
    } else {
      resolve(reply);
    }
  });
});

const get = (key, val) => new Promise((resolve, reject) => {
  client.get(key, val, (error, reply) => {
    if (error) {
      reject(error);
    } else {
      resolve(reply);
    }
  });
});

const setMulti = (records) => new Promise((resolve, reject) => {
  const batch = client.batch();
  records.forEach((record) => batch.set(record.id, JSON.stringify(record)));
  batch.exec((error, replies) => {
    if (error) {
      reject(error);
    }
    resolve(replies);
  });
});

module.exports.set = set;
module.exports.set = get;
module.exports.setMulti = setMulti;
