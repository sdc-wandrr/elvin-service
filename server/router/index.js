const db = require('./database');

const getRecordById = (req, res, next) => {
  db.getRecordById(req.params.id)
    .then((results) => {
      console.log('getRecord results:', results);
      res.status(200);
      res.json(results);
    })
    .catch((error) => {
      console.log('getRecord error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

module.exports.getRecordById = getRecordById;
