const userRepository = require('../repositories/userRepository');

const register = async (req, res) => {
    try {
        const data = req.body;
        console.log(data, 'body');
        await userRepository.add(data);
        res.status(201);
        res.send();
    } catch (e) {
        if (e._message === 'user validation failed') {
            res.status(400);
            res.json(e.errors);
        } else {
            // logging
            res.status(500);
            res.send('Internal Server Error');
        }
    }
};

module.exports = { register };
