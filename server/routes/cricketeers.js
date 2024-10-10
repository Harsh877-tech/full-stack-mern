const express = require('express');
const router = express.Router();
const Cricketeer = require('../models/Cricketeer');

// Get all cricketeers
router.get('/', async (req, res) => {
  try {
    const cricketeers = await Cricketeer.find();
    res.json(cricketeers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new cricketeer
router.post('/', async (req, res) => {
  const cricketeer = new Cricketeer(req.body);
  try {
    const newCricketeer = await cricketeer.save();
    res.status(201).json(newCricketeer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;