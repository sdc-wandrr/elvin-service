const axios = require('axios');

const timeRequest = (id, callback) => {
  const start = Date.now();
  axios.get('/api/house/:id/hostel')
    .then((results) => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      callback(null, elapsed, results);
    })
    .catch((error) => {
      const end = Date.now();
      const elapsed = (end - start) / 1000;
      callback(error, elapsed);
    });
};

const test = () => {
  let total = [];
  let counter = 1;
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
      console.log(`Average time to complete ${counter} requests is ${avg}`);
    }
  };
  timeRequest(getId(), results);
};

test();
