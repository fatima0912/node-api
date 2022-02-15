const UserModel = require('../models/userModel');

const add = (data) => {
    const user = new UserModel(data);
    return user.save(); // async
};

const update = (email, data) => {
    const { firstName, lastName, mobile,
        qualification, degree, passout,
        skills, gender } = data;
    return UserModel.updateOne({ email }, {
        $set: {
            firstName,
            lastName,
            mobile,
            gender,
            qualification,
            degree,
            skills,
            passout,
            updatedAt: Date.now()
        }
    });
};

const getUsers = (pageIndex, pageSize, options) => {
    const projection = { __v: 0, _id: 0, password: 0 };
    const { name, qualification, degree } = options;
    const filter = {
        $or: [
            { firstName: { $regex: name } },
            { lastName: { $regex: name } },
        ]
    };
    if (degree) filter.degree = degree;
    if (qualification) filter.qualification = qualification;
    const skipRows = pageIndex * pageSize;
    return UserModel.find(filter, projection)
        .sort({ updatedAt: -1 })
        .skip(skipRows)
        .limit(pageSize);
}

const getUserByEmail = (email) => {
    const filter = { email };
    const projection = { __v: 0, _id: 0, password: 0 };
    return UserModel.findOne(filter, projection);
}

const getUserCount = (options) => {
    const { name, qualification, degree } = options;
    const filter = {
        $or: [
            { firstName: { $regex: name } },
            { lastName: { $regex: name } },
        ]
    };
    if (degree) filter.degree = degree;
    if (qualification) filter.qualification = qualification;
    return UserModel.count(filter);
}

module.exports = {
    add,
    update,
    getUsers,
    getUserByEmail,
    getUserCount
};
