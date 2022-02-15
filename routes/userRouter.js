const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.post('/signup', userCtrl.register);
router.put('/:email', userCtrl.update);
router.get('/page/:page/size/:size', userCtrl.getUsers);
router.get('/', userCtrl.getUsers);
router.get('/:email', userCtrl.getUserByEmail);
// http://localhost:3000/api/users/page/10/size/100

module.exports = router;
