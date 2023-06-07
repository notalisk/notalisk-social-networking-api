const userData = [
    {
        username: 'Mercy',
        email: 'mercy@test.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'Hanzo',
        email: 'hanzo@test.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'Soldier',
        email: 'soldier@test.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'Orisa',
        email: 'orisa@test.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'Kiriko',
        email: 'kiriko@test.com',
        thoughts: [],
        friends: []
    }
];

const thoughtData = [
    {
        thoughtTxt: 'Today is a good day!',
        username: 'Orisa',
        reactions: [
            {
                reactionBody: 'Agreed :)',
                username: 'Mercy'
            },
            {
                reactionBody: 'Oh yeah! Definitely!',
                username: 'Kiriko'
            }
        ]
    },
    {
        thoughtTxt: 'I like bows and arrows',
        username: 'Hanzo',
        reactions: [
            {
                reactionBody: 'Why.. There are so many better weapons.',
                username: 'Soldier'
            },
            {
                reactionBody: 'I guess I have to tell my mom you have not kept up with the sword.',
                username: 'Kiriko'
            }
        ]
    },
    {
        thoughtTxt: 'It gets annoying dishing out so much healing all the time to silly dps and tanks who overextend. Can you guys TRY to be smarter please?',
        username: 'Mercy',
        reactions: [
            {
                reactionBody: 'Just following my programming!',
                username: 'Orisa'
            },
            {
                reactionBody: 'I dont need you, I have a heal ability.',
                username: 'Soldier'
            }
        ]
    }
];

module.exports = { userData, thoughtData };