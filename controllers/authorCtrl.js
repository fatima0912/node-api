class AuthorCtrl {
    get(req, res) {
        const authors = [
            { id: 1, name: "Robert Martic" },
            { id: 2, name: "Martin Fowler" }
        ];
        res.status(200);
        res.json(authors);
    }
}

module.exports = new AuthorCtrl();