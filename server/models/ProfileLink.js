const mongoose = require('mongoose');

const ProfileLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url: { type: String, required: true },
  icon: { type: String, default: '' },
  color: { type: String, default: '#00ff00' },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model('ProfileLink', ProfileLinkSchema);
