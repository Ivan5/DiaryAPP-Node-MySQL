const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

router.get('/',customerController.list);

module.exports = router;
