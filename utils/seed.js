const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connection successful');

    // drop current data
    await User.deleteMany({});
    await Thought.deleteMany({});

    for (let i = 0; i < 3; i++) {
        await Thought.collection.insertOne(thoughtData[i]);
    }


    await User.collection.insertMany(userData);

    console.log('Seeds planted');
    process.exit(0);
});