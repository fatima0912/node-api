const config = {
    // dbConStr: "mongodb://127.0.0.1:27017/ani",
    // jwtSecret: "secret@123$"
    dbConStr: process.env.dbConStr,
    jwtSecret: process.env.jwtSecret
};

module.exports = config;
