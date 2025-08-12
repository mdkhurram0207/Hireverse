const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  phone: String,
  role: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);
