const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/index');
const deafultRouter = require('./routes/defaultRouter');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to MongoDb'))
    .catch(err => console.log('failed to connect to db'));

app.use('/', deafultRouter);