const Candidate = require('../models/candidate');

exports.applyCandidate = async (req, res) => {
  try {
    const resume = req.file ? req.file.filename : null;
    const candidate = await Candidate.create({ ...req.body, resume });
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
