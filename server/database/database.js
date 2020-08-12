/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'hostileworld',
});

connection.connect((err) => {
  if (err) {
    console.log('Error conencting to DB');
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;
