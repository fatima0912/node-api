// api
// serialization 
// de-serialization
// require module
// import Java.utils
// module
const http = require('http');
const server = http.createServer(handleRequest);
// http 80 default
// https 443
// async
server.listen(3000, function () {
    console.log("Server  is running on port 3000");
});

// fun expr
// fun declaration
// routing
// log
// client1 - thread1 
// thread1 - client1, client2, client3 
// Linkedin RubyOnRails 21 servers
// NodeJS - 3 servers & 20% up performance
// MERN - Mongo, express, React & Node
// Java - spring boot
function handleRequest(req, res) {
    switch (req.url) {
        case '/':
            res.write("Node API");
            break;
        case '/books':
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
            res.write(JSON.stringify(books));
            break;
        case '/authors':
            const authors = [
                { id: 1, name: "Robert Martic" },
                { id: 2, name: "Martin Fowler" }
            ];
            res.write(JSON.stringify(authors));
            break;
        default:
            res.write("not found");
    }
    res.end();
}

// // everything is a value
// // entity 2
// function addAsync(a, b, cb) {
//     setTimeout(() => {
//         var c = a + b;
//         cb(c);
//     }, 2000);
// }


// // entity 1
// function callback(res) {
//     console.log(res);
// }
// addAsync(10, 20, callback);








