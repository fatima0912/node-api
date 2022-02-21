const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const tokenAuth = require('../middlewares/tokenAuth');
const router = express.Router();


const authorizeRecruiter = (req, res, next) => {
    if (req.role === 1) next();
    else res.status(403).send('Forbidden');
};

const authorizeAdmin = (req, res, next) => {
    if (req.role === 2) next();
    else res.status(403).send('Forbidden');
}

// public
router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);

// candidate
router.put('/:email', tokenAuth, userCtrl.update);

// recruiter
router.get('/page/:page/size/:size', tokenAuth, authorizeRecruiter, userCtrl.getUsers);
router.get('/', tokenAuth, authorizeRecruiter, userCtrl.getUsers);
router.get('/:email', tokenAuth, authorizeRecruiter, userCtrl.getUserByEmail);

// admin
router.post('/recruiter/signup', authorizeAdmin, userCtrl.addRecruiter);
// http://localhost:3000/api/users/page/10/size/100

module.exports = router;
