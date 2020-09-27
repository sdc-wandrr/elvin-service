const db = require('../database');
const cache = require('../cache');
const config = require('../config/router.js');

const getCache = (id, query) => (
  cache.get(id)
    .then((getReply) => {
      console.log('getCache cache hit:', getReply !== null);
      if (getReply !== null) return getReply;
      return query(id)
        .then((data) => (cache.setMulti(data.rows)
          .then((replies) => {
            console.log('getCache query record count:', data.rows.length);
            if (replies.length === data.rows.length) return cache.get(id);
            return JSON.stringify(data.rows[Math.floor(data.rows.length / 2)]);
          })));
    }));

const get = (query) => {
  console.log(query.name, 'CACHE ENABLED:', config.CACHE_ENABLED);
  if (config.CACHE_ENABLED) {
    return (req, res) => {
      getCache(req.params.id, query)
        .then((record) => {
          // console.log(`${query.name} record:`, record);
          res.status(200).type('application/json').end(record);
        })
        .catch((error) => {
          console.log(`${query.name} error:`, error);
          res.status(500).end('Something went wrong. Please try again later.');
        });
    };
  }
  return (req, res) => {
    query(req.params.id)
      .then((data) => {
        // console.log(`${query.name} data:`, data);
        console.log('get recod count:', data.rows.length);
        res.status(200).json(data.rows[Math.floor(data.rows.length / 2)]);
      })
      .catch((error) => {
        console.log(`${query.name} error:`, error);
        res.status(500).end('Something went wrong. Please try again later.');
      });
  };
};

module.exports.getRecordsByIdRange = get(db.postgresql.getRecordsByIdRange);
module.exports.getRecordById = get(db.postgresql.getRecordById);
module.exports.getHostelById = get(db.postgresql.getHostelById);
module.exports.getAddressByHostelId = get(db.postgresql.getAddressByHostelId);
module.exports.getRulesByHostelId = get(db.postgresql.getRulesByHostelId);
module.exports.getDescriptionByHostelId = get(db.postgresql.getDescriptionByHostelId);
