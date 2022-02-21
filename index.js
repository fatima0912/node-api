const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const config = require('./config/index');
const deafultRouter = require('./routes/defaultRouter');
const userRouter = require('./routes/userRouter');

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


fs.mkdirSync(path.join(__dirname, 'logs'));
const stream =
    fs.createWriteStream(path.join(__dirname, 'logs', 'request.log'), { flags: 'a' });
app.use(morgan('combined', { stream }));


app.use(bodyParser.json());

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to MongoDb'))
    .catch(err => console.log('failed to connect to db'));

app.use('/', deafultRouter);
app.use('/api/users', userRouter);