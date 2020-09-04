const db = require('../database');

const get = (query) => (
  (req, res, next) => {
    query(req.params.id)
      .then((data) => {
        // console.log(`${query.name} data:`, data);
        res.status(200).json(data.rows);
      })
      .catch((error) => {
        console.log(`${query.name} error:`, error);
        res.status(500).end('Something went wrong. Please try again later.');
      });
  });

module.exports.getRecordById = get(db.postgresql.getRecordById);
module.exports.getHostelById = get(db.postgresql.getHostelById);
module.exports.getAddressByHostelId = get(db.postgresql.getAddressByHostelId);
module.exports.getRulesByHostelId = get(db.postgresql.getRulesByHostelId);
module.exports.getDescriptionByHostelId = get(db.postgresql.getDescriptionByHostelId);
