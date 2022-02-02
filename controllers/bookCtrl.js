// REST API
// Representation state transfer
// evrything is a resource
// resource can be read, written, updated, deleted
// HTTP Verbs
// GET : read
// POST: create
// PUT : update
// DELETE: delete
// PATCH: partial update
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

class BookCtrl {
    get(req, res) {
        res.status(200);
        res.json(books);
    }

    // debugging
    getById(req, res) {
        const id = +req.params.id;
        let book;
        for (let i = 0; i < books.length; i++) {
            if (books[i].id === id) {
                book = books[i];
                break;
            }
        }

        if (book) {
            res.status(200);
            res.json(book);
        } else {
            res.status(404);
            res.send("not found");
        }
    }

    // get: safe, no-body
    // post, put, delete : unsafe
    // post, put, patch: body
    // URL
    // method
    // content negotiation
    // req headers: content-type: application/json
    // accept: application/xml 
    // res headers: content-type: application/xml
    // body
    create(req, res) {
        console.log(req.body);
        res.status(201);
        res.send("Created");
    }
}

module.exports = new BookCtrl();