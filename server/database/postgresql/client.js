const { Pool } = require('pg');
const config = require('../../config/postgresql.js');

module.exports = new Pool({ ...config.client, max: 1 });
