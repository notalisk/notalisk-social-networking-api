const { Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        }  catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    // get a single thought by _id
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findById({ _id: req.params.thoughtId });
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    // create a thought
    async createThought(req, res) {
        try {
            const newThought = await Thought.create(req.body);
            res.json(newThought);
        } catch (err) {
            console.log(err);
            return res.status(400).json(err);
        }
    }
};