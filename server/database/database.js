const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'house_info',
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to DB');
  }
});

module.exports = connection;
