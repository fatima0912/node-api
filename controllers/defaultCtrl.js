const health = (req, res) => {
    res.status(200);
    res.json({ status: 'Up' });
};

function home(req, res) {
    res.status(200);
    res.send("Node API");
}

const defaultCtrl = {
    health: health,
    home: home
};

// nodejs specific
module.exports = defaultCtrl;


