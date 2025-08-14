const express = require('express');
const router = express.Router();
const { submitClientRequest } = require('../controllers/clientController');

// Temporary GET route for testing
router.get('/', (req, res) => {
  res.json({ message: 'Clients API is working!' });
});

router.post('/', submitClientRequest);

module.exports = router;
