const { connect, connection } = require('mongoose');
require('dotenv').config();

// determine the database connection (heroku var or local)
const connectionString = process.env.URL;

connect(connectionString);

module.exports = connection;