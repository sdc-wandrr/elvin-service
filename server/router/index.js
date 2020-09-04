const db = require('../database');

const getRecordById = (req, res, next) => {
  db.postgresql.getRecordById(req.params.id)
    .then((data) => {
      // console.log('getRecordById data:', data);
      res.status(200);
      res.json(data.rows);
    })
    .catch((error) => {
      console.log('getRecordById error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

const getHostelById = (req, res, next) => {
  db.postgresql.getHostelById(req.params.id)
    .then((data) => {
      // console.log('getHostelById data:', data);
      res.status(200);
      res.json(data.rows);
    })
    .catch((error) => {
      console.log('getHostelById error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

const getAddressByHostelId = (req, res, next) => {
  db.postgresql.getAddressByHostelId(req.params.id)
    .then((data) => {
      // console.log('getAddressByHostelId data:', data);
      res.status(200);
      res.json(data.rows);
    })
    .catch((error) => {
      console.log('getAddressByHostelId error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

const getRulesByHostelId = (req, res, next) => {
  db.postgresql.getRulesByHostelId(req.params.id)
    .then((data) => {
      // console.log('getRulesByHostelId data:', data);
      res.status(200);
      res.json(data.rows);
    })
    .catch((error) => {
      console.log('getRulesByHostelId error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

const getDescriptionByHostelId = (req, res, next) => {
  db.postgresql.getDescriptionByHostelId(req.params.id)
    .then((data) => {
      // console.log('getDescriptionByHostelId data:', data);
      res.status(200);
      res.json(data.rows);
    })
    .catch((error) => {
      console.log('getDescriptionByHostelId error:', error);
      res.status(500).end('Something went wrong. Please try again later.');
    });
};

module.exports.getRecordById = getRecordById;
module.exports.getHostelById = getHostelById;
module.exports.getAddressByHostelId = getAddressByHostelId;
module.exports.getRulesByHostelId = getRulesByHostelId;
module.exports.getDescriptionByHostelId = getDescriptionByHostelId;
