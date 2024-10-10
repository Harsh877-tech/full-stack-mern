const mongoose = require('mongoose');

const CricketeerSchema = new mongoose.Schema({
  name: String,
  position: String,
  battingTechnique: String,
  nationality: String,
  yearsOld: Number,
  performance: {
    gamesPlayed: Number,
    runsScored: Number,
    wicketsTaken: Number,
  }
});

module.exports = mongoose.model('Cricketeer', CricketeerSchema);