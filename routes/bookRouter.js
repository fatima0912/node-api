const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();

// /books/
//GET /books/20
router.get('/', bookCtrl.get);
router.post('/', bookCtrl.create);
router.get('/:id', bookCtrl.getById);
router.put('/:id', bookCtrl.update);
router.patch('/:id', bookCtrl.patch);
router.delete('/:id', bookCtrl.delete);

module.exports = router;
