const { Pool } = require('pg');
const config = require('./config');

// Create a new pool instance
const pool = new Pool({
  connectionString: config.DB_URI,
  ssl: {
    rejectUnauthorized: false, // Ensure proper SSL settings for production
  },
});

pool.connect()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = pool;  // Export the pool
