const { connect, connection } = require('mongoose');

// determine the database connection (heroku var or local)
const connectionString = process.env.MONGODB_URL || `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@classactivities.lr1bn7r.mongodb.net/`;

connect(connectionString);

module.exports = connection;