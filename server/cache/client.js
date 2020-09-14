const redis = require('redis');
const config = require('../config/redis');

const client = redis.createClient(config);

module.exports = client;
