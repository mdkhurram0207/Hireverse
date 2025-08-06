const Job = require('../models/job');

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// GET all jobs
exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};