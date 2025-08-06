const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: String,
  category: String,
  location: String,
  description: String,
  postedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Job', jobSchema);
