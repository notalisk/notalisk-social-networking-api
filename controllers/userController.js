const { User } = require('../models');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    // get a single user by _id
    async getOneUser(req, res) {
        try {
            const user = await User.findById({ _id: req.params.userId });
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    // create a user
    async createUser(req, res) {
        try {
            const newUser = await User.create(req.body);
            res.json(newUser);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
};