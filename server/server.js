const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = `${process.env.MONGODB_URI}?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: process.env.MONGODB_USERNAME,
  pass: process.env.MONGODB_PASSWORD
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Import routes
const cricketeerRoutes = require('./routes/cricketeers');
const scriptureRoutes = require('./routes/scriptures');

// Use routes
app.use('/api/cricketeers', cricketeerRoutes);
app.use('/api/scripture', scriptureRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to CricketBibleHub API');
});

// Test route for Bible API
app.get('/test-bible-api', async (req, res) => {
  try {
    const response = await axios.get('https://labs.bible.org/api/?passage=John3:16&type=json', {
      headers: {
        'User-Agent': 'CricketBibleHub/1.0'
      }
    });
    res.json(response.data);
  } catch (err) {
    console.error('Error testing Bible API:', err.message);
    res.status(500).json({ message: err.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));