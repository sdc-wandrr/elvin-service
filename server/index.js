const path = require('path');
const express = require('express');
const query = require('./database/queries');

const app = express();
const port = 3000;

app.get('/api/house/:id', (req, res) => {
  query.getHouseInfoByID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('api/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('api/house/:id/address', (req, res) => {
  query.getHouseAddress(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('api/house/:id/rules', (req, res) => {
  query.getRulesByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('api/house/:id/full_listing', (req, res) => {
  query.getPropertyRules(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`);
});
