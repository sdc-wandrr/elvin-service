const express = require('express');
const path = require('path');
const routes = require('./router');
const config = require('./config/server.js');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use((req, res, next) => {
  console.log(`${req.method} on ${req.path}:`, req.params, req.body);
  next();
});

app.get('/api/house/:id/hostel', routes.getRecordById);

app.listen(config.PORT, () => {
  console.log(`Server is listening on ${config.PORT}`);
});
