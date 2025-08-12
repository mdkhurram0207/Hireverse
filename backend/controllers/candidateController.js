const Candidate = require('../models/candidate');

exports.applyCandidate = async (req, res) => {
  try {
    const resume = req.file ? req.file.filename : null;

    const candidate = await Candidate.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      category: req.body.category,
      resume
    });

    res.status(201).json({
      success: true,
      message: 'Candidate applied successfully!',
      data: {
        ...candidate._doc,
        resumeUrl: resume
          ? `${req.protocol}://${req.get('host')}/uploads/${resume}`
          : null
      }
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
