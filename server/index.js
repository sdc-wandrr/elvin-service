const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const query = require('./database/queries.js');

const app = express();

app.use(express.json());
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/hostels/:id', express.static(path.join(__dirname, '../public')));

app.use((req, res, next) => {
  console.log(`${req.method} on ${req.path} with data:`, req.params, req.body);
  next();
});

// =============== hostel ===============

app.get('/api/house/:id/hostel', (req, res) => {
  query.getHouseInfoByHostelID(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/house/hostel', (req, res) => {
  query.createHouseInfo(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.put('/api/house/:id/hostel', (req, res) => {
  const args = { ...req.body, id: req.params.id };
  query.updateHouseInfo(args, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/house/:id/hostel', (req, res) => {
  query.deleteHouseInfo(req.params.id, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send('Success');
    }
  });
});

// =============== description ===============

app.get('/api/house/:id/description', (req, res) => {
  query.getHouseDescription(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/house/description', (req, res) => {
  query.createHouseDescription(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.put('/api/house/:id/description', (req, res) => {
  const args = { ...req.body, id: req.params.id };
  query.updateHouseDescription(args, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/house/:id/description', (req, res) => {
  query.deleteHouseDescription(req.params.id, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send('Success');
    }
  });
});

// =============== address ===============

app.get('/api/house/:id/address', (req, res) => {
  query.getHouseAddress(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

// =============== rules ===============

app.get('/api/house/:id/rules', (req, res) => {
  query.getHouseRules(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/house/rules', (req, res) => {
  query.createHouseRules(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.put('/api/house/:id/rules', (req, res) => {
  const args = { ...req.body, id: req.params.id };
  query.updateHouseRules(args, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/house/:id/rules', (req, res) => {
  query.deleteHouseRules(req.params.id, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send('Success');
    }
  });
});

// app.get('/house/:id/full_listing', (req, res) => {
//   query.getHouseFullListing(req.params.id, (err, data) => {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.send(data);
//     }
//   });
// });

// app.listen(port, () => {
//   // console.log(`Example app listening at http://localhost:${port}`);
// });

module.exports = app;
