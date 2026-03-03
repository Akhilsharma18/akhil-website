const express = require('express');
const router = express.Router();
const ProfileLink = require('../models/ProfileLink');

// GET all profile links
router.get('/', async (req, res) => {
  try {
    const links = await ProfileLink.find().sort({ order: 1 });
    res.json(links);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create link (admin)
router.post('/', async (req, res) => {
  try {
    const link = new ProfileLink(req.body);
    const saved = await link.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update link (admin)
router.put('/:id', async (req, res) => {
  try {
    const updated = await ProfileLink.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
