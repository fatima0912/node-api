const express = require('express');
const defaultCtrl = require('./controllers/defaultCtrl');
const bookCtrl = require('./controllers/bookCtrl');
const authorCtrl = require('./controllers/authorCtrl');

const app = express();

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

// routing
app.get('/', defaultCtrl.home);
app.get('/health', defaultCtrl.health);

app.get('/books', bookCtrl.get);
app.get('/books/:id',bookCtrl.getById);
app.post('/books',bookCtrl.create);
app.get('/authors', authorCtrl.get);