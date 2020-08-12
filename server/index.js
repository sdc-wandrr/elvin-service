const path = require('path');
const express = require('express');
const query = require('./database/queries.js');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/house/:id', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/public/bundle.js', (req, res) => {
  res.sendFile('bundle.js', { root: path.join(__dirname, '../public') });
});

app.get('/house/:id/hostel', (req, res) => {
  query.getHouseInfoByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/house/:id/address', (req, res) => {
  query.getHouseAddress(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/house/:id/rules', (req, res) => {
  query.getHouseRules(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/house/:id/full_listing', (req, res) => {
  query.getHouseFullListing(req.params.id, (err, data) => {
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
