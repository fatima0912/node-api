const authorizeRecruiter = (req, res, next) => {
    if (req.role === 1) next();
    else res.status(403).send('Forbidden');
};

const authorizeAdmin = (req, res, next) => {
    if (req.role === 2) next();
    else res.status(403).send('Forbidden');
}

module.exports = { authorizeAdmin, authorizeRecruiter };
