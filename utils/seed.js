const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection successful');

    // drop current data
    await User.deleteMany({});
    await Thought.deleteMany({});

    await Thought.collection.insertMany(thoughtData);

    console.table(thoughtData);
    console.log('Seeds planted');
    process.exit(0);
});