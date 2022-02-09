const UserModel = require('../models/userModel');

const add = (data) => {
    const user = new UserModel(data);
    return user.save(); // async
};


module.exports = { add };
