const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const tokenAuth = require('../middlewares/tokenAuth');
const router = express.Router();

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);
router.put('/:email', tokenAuth, userCtrl.update);
router.get('/page/:page/size/:size', tokenAuth, userCtrl.getUsers);
router.get('/', tokenAuth, userCtrl.getUsers);
router.get('/:email', tokenAuth, userCtrl.getUserByEmail);
// http://localhost:3000/api/users/page/10/size/100

module.exports = router;
