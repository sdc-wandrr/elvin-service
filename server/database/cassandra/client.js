const cassandra = require('cassandra-driver');
const config = require('../../config/cassandra.js');

const client = new cassandra.Client(config);

module.exports = client;