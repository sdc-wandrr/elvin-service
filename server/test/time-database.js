const cassandra = require('../database/cassandra/client.js');
const postgresql = require('../database/postgresql/client.js');

const cassandraQuery = (id, db) => {
  const q = 'SELECT * FROM hostel.hostels WHERE id = ?';
  return db.execute(q, [id], { prepare: true });
};

const postgresQuery = (id, db) => {
  const q = 'SELECT * FROM hostels WHERE id = $1';
  return db.query(q, [id]);
};

const timeQuery = (id, query, db, callback) => {
  const start = Date.now();
  query(id, db)
    .then((results) => {
      const end = Date.now();
      const elapsed = (end - start);
      callback(null, results, elapsed, query, db);
    })
    .catch((error) => {
      const end = Date.now();
      const elapsed = (end - start);
      callback(error, null, elapsed, query, db);
    });
};

const average = (array) => {
  const sum = array.reduce((accumulator, item) => (accumulator + item));
  return sum / array.length;
};

const getId = () => {
  return Math.floor(Math.random() * 1000000) + 9000000;
};

const test = () => {
  let total = [];
  let counter = 1000;
  const results = (error, response, elapsed, query, client) => {
    total.push(elapsed);
    if (error) {
      console.log('Error occured during request:', error);
    }
    // console.log('Query execution details:', response);
    if (counter > total.length) {
      timeQuery(getId(), query, client, results);
    } else {
      const avg = average(total);
      console.log(`Average time of executing ${query.name} ${counter} times is ${avg} milliseconds`);
      if (query.name === 'cassandraQuery') {
        client.shutdown();
        total = [];
        postgresql.connect()
          .then((client) => {
            timeQuery(getId(), postgresQuery, client, results);
          });
      } else {
        client.end();
      }
    }
  };
  cassandra.connect()
    .then(() => {
      timeQuery(getId(), cassandraQuery, cassandra, results);
    });
};

test();