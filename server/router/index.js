const db = require('../database');

const getRecordById = (req, res, next) => {
  db.postgresql.getRecordById(req.params.id)
    .then((data) => {
      console.log('getRecord data:', { data: data.rows });
      res.status(200);
      res.json({ data: data.rows });
    })
    .catch((error) => {
      console.log('getRecord error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

module.exports.getRecordById = getRecordById;
