const express = require('express');
const orderControllers = require('../Controllers/orderControllers');

const router = express.Router();

router.route('/create').post(orderControllers.create);

module.exports = router;