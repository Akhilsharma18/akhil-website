const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// GET contact info
router.get('/', async (req, res) => {
  try {
    const contact = await Contact.findOne();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT update contact (admin)
router.put('/', async (req, res) => {
  try {
    let contact = await Contact.findOne();
    if (contact) {
      contact = await Contact.findByIdAndUpdate(contact._id, { ...req.body, updatedAt: Date.now() }, { new: true });
    } else {
      contact = new Contact(req.body);
      await contact.save();
    }
    res.json(contact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
