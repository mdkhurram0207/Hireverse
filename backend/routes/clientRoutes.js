const express = require('express');
const router = express.Router();
const { submitClientRequest } = require('../controllers/clientController');

router.post('/', submitClientRequest);

module.exports = router;
