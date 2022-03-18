const express = require('express');
const { randomBytes } = require('crypto');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
const posts = {};

/**
 * @desc Get all posts
 */
app.get('/posts', (req, res) => {
    res.send(posts);
});


/**
 * @desc Create a new post
 */
app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: { id, title }
    });
    res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);

    res.send({});
})
app.listen(4000, () => {
    console.log('v20 now...');
    console.log('Listening on 4000 for posts...');
});