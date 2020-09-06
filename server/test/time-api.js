const axios = require('axios');
const config = require('../config/server.js');

const timeRequest = (id, endpoint, callback) => {
  const host = `http://localhost:${config.PORT}`;
  const apiEndpoint = `/api/house/${id}/${endpoint}`;
  const path = `${host}${apiEndpoint}`;
  const start = Date.now();
  axios.get(path)
    .then((results) => {
      const end = Date.now();
      const elapsed = (end - start);
      callback(null, elapsed, results);
    })
    .catch((error) => {
      const end = Date.now();
      const elapsed = (end - start);
      callback(error, elapsed);
    });
};

const average = (array) => {
  const sum = array.reduce((accumulator, item) => (accumulator + item));
  return sum / array.length;
};

const getId = () => {
  return Math.floor(Math.random() * 1000000) + 9000000;
};

const getEndpoint = () => {
  const endpoints = ['hostel', 'address', 'rules', 'description'];
  return endpoints[Math.floor(Math.random() * 4)];
};

const test = () => {
  let total = [];
  let counter = 1000;
  const results = (error, elapsed, response) => {
    total.push(elapsed);
    if (error) {
      console.log('Error occured during request:', error);
    }
    if (counter > total.length) {
      timeRequest(getId(), getEndpoint(), results);
    } else {
      const avg = average(total);
      console.log(`Average time of completing ${counter} requests is ${avg} milliseconds`);
    }
  };
  timeRequest(getId(), getEndpoint(), results);
};

test();
