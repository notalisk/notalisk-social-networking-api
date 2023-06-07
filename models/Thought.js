const { Schema, Types, model } = require('mongoose');

// Reaction
// Just a schema, not a model.
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            max_length: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toLocaleString()
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// Thought
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        // Date of creation
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => timestamp.toLocaleString()
        },
        // Username of poster
        username: {
            type: String,
            required: true
        },
        // List of reactions to this thought
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

// Number of reactions (virtual)
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;