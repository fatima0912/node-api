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
// const port = 3000;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

const dir = path.join(__dirname, 'logs');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const stream =
    fs.createWriteStream(path.join(__dirname, 'logs', 'request.log'), { flags: 'a' });
app.use(morgan('combined', { stream }));


app.use(bodyParser.json());

mongoose.connect(config.dbConStr)
    .then(res => console.log('Connected to MongoDb'))
    .catch(err => console.log('failed to connect to db'));

app.use('/', deafultRouter);
app.use('/api/users', userRouter);