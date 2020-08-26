/* eslint-disable no-console */
const mysql = require('mysql');

const connection = mysql.createConnection({
  //host: 'hostileworld.cbl6gs4ouqjh.us-east-2.rds.amazonaws.com',
  user: 'root',
  database: 'hostileworld',
  //password: 'hostileworld!'
});

connection.connect((err) => {
  if (err) {
    console.log('Error conencting to DB');
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;
