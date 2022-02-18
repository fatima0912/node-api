const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const basicAuth = require('../middlewares/basicAuth');
const router = express.Router();

router.post('/signup', userCtrl.register);
router.post('/signin', userCtrl.signin);
router.put('/:email', basicAuth, userCtrl.update);
router.get('/page/:page/size/:size', basicAuth, userCtrl.getUsers);
router.get('/', basicAuth, userCtrl.getUsers);
router.get('/:email', basicAuth, userCtrl.getUserByEmail);
// http://localhost:3000/api/users/page/10/size/100

module.exports = router;
