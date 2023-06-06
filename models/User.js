const { Schema, Types } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Verifies the email address via the given Regex
            match: ['/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/', 'Please enter a valid email address']
        },
        thoughts: [thoughtSchema],
        // Self reference
        friends: [userSchema]
    }
);

const User = model('user', userSchema);

module.exports = User;