const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());


const events = [];
app.post('/events', async (req, res) => {
    const event = req.body;
    events.push(event);

   await axios.post('http://posts-clusterip-srv:4000/events', event).catch(error => console.error(error.message));
   await axios.post('http://comments-srv:4001/events', event).catch(error => console.error(error.message));
   await axios.post('http://query-srv:4002/events', event).catch(error => console.error(error.message));
   await axios.post('http://moderation-srv:4003/events', event).catch(error => console.error(error.message));

    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
})
app.listen(4005, () => {
    console.log('Listening on 4005 for event-bus...');
})