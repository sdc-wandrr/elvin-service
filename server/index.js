// const path = require('path');
const express = require('express');
const query = require('./database/queries.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'))

app.get('/api/house/:id', (req, res) => {
  console.log(req.params.id, 'req in app.get');
  query.getHouseInfoByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(res, 'res in app.get');
      console.log(data, 'data in app.get');
      res.send(data);
    }
  });
});

app.get('api/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
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
