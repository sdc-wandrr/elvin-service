const axios = require('axios');
const config = require('../config/server.js');

const timeRequest = (id, callback) => {
  const path = `http://localhost:${config.PORT}/api/house/${id}/hostel`;
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

const test = () => {
  let total = [];
  let counter = 1000;
  const average = (array) => {
    const sum = array.reduce((accumulator, item) => (accumulator + item));
    return sum / array.length;
  };
  const getId = () => {
    return Math.floor(Math.random() * 1000000) + 9000000;
  };
  const results = (error, elapsed, response) => {
    total.push(elapsed);
    if (error) {
      console.log('Error occured during request:', error);
    }
    if (counter > total.length) {
      timeRequest(getId(), results);
    } else {
      const avg = average(total);
      console.log(`Average time of completing ${counter} requests is ${avg} milliseconds`);
    }
  };
  timeRequest(getId(), results);
};

test();
