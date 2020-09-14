const db = require('../database');
const cache = require('../cache');

const getCache = (id, query) => (
  cache.get(id)
    .then((getReply) => {
      if (getReply !== null) return getReply;
      return query(id)
        .then((data) => cache.setMulti(data.rows)
          .then((multiReply) => {
            if (multiReply === 'OK') return cache.get(id);
            return JSON.stringify(data.rows[Math.floor(data.rows.length / 2)]);
          }));
    }));

const get = (query) => (
  (req, res) => {
    getCache(req.params.id, query)
      .then((record) => {
        // console.log(`${query.name} record:`, record);
        res.status(200).end(record);
      })
      .catch((error) => {
        console.log(`${query.name} error:`, error);
        res.status(500).end('Something went wrong. Please try again later.');
      });
  });

module.exports.getRecordsByIdRange = get(db.postgresql.getRecordsByIdRange);
module.exports.getRecordById = get(db.postgresql.getRecordById);
module.exports.getHostelById = get(db.postgresql.getHostelById);
module.exports.getAddressByHostelId = get(db.postgresql.getAddressByHostelId);
module.exports.getRulesByHostelId = get(db.postgresql.getRulesByHostelId);
module.exports.getDescriptionByHostelId = get(db.postgresql.getDescriptionByHostelId);
