const express = require('express');
const defaultCtrl = require('./controllers/defaultCtrl');

const app = express();

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

// routing
app.get('/', defaultCtrl.home);
app.get('/health', defaultCtrl.health);

// monitoring tools
// svc up
// google
// x100
// status codes
// 1xx - information
// 2xx - success 200, 201, 204
// 3xx - redirects
// 4xx - client errors 401, 404, 400
// 5xx - server errors 501, 502



app.get('/books', function (req, res) {
    const books = [{
        id: 1,
        name: "Refactoring",
        price: 20
    }, {
        id: 2,
        name: "Clean Code",
        price: 50
    },
    {
        id: 3,
        name: "Clean Coder",
        price: 100
    }];

    res.status(200);
    res.json(books);
});


app.get('/authors', (req, res) => {
    const authors = [
        { id: 1, name: "Robert Martic" },
        { id: 2, name: "Martin Fowler" }
    ];
    res.status(200);
    res.json(authors);
});