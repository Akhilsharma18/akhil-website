const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [{ type: String }],
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model('Skill', SkillSchema);
