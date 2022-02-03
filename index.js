const express = require('express');
const bodyParser = require('body-parser')
const defaultCtrl = require('./controllers/defaultCtrl');
const bookCtrl = require('./controllers/bookCtrl');
const authorCtrl = require('./controllers/authorCtrl');

const app = express();

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

app.use(bodyParser.json());

// routing
app.get('/', defaultCtrl.home);
app.get('/health', defaultCtrl.health);

app.get('/books', bookCtrl.get);
app.get('/books/:id', bookCtrl.getById);
app.post('/books', bookCtrl.create);
app.delete('/books/:id', bookCtrl.delete);
app.put('/books/:id', bookCtrl.update);
app.patch('/books/:id', bookCtrl.patch);

app.get('/authors', authorCtrl.get);