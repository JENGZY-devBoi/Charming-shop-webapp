const express = require('express');
const productControllers = require('../Controllers/productControllers');

const router = express.Router();

router.route('/create').post(productControllers.create);
router.route('/').get(productControllers.getAll);
router.route('/:id').get(productControllers.getById);

module.exports = router;