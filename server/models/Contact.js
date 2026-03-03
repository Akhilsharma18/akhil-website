const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);
