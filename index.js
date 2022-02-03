const express = require('express');
const bodyParser = require('body-parser')
const authorCtrl = require('./controllers/authorCtrl');
const bookRouter = require('./routes/bookRouter');
const defaultRouter = require('./routes/defaultRouter');

const app = express();

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

app.use(bodyParser.json());

// routes
app.use('/', defaultRouter);
app.use('/api/books', bookRouter);

app.get('/authors', authorCtrl.get);