const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploads');
const { applyCandidate } = require('../controllers/candidateController');

router.post('/', upload.single('resume'), applyCandidate);

module.exports = router;
