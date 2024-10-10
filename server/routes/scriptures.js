const express = require('express');
const router = express.Router();
const axios = require('axios');

const API_KEY = '9a6633e37b7b99e44a06e29240a0d381';
const BIBLE_ID = '9879dbb7cfe39e4d-01'; // English Standard Version
const BASE_URL = 'https://api.scripture.api.bible/v1';

router.get('/random', async (req, res) => {
  console.log('Received request for random scripture');
  try {
    // Get all books
    const booksResponse = await axios.get(`${BASE_URL}/bibles/${BIBLE_ID}/books`, {
      headers: { 'api-key': API_KEY }
    });
    const books = booksResponse.data.data;
    
    // Select a random book
    const randomBook = books[Math.floor(Math.random() * books.length)];
    
    // Get chapters for the selected book
    const chaptersResponse = await axios.get(`${BASE_URL}/bibles/${BIBLE_ID}/books/${randomBook.id}/chapters`, {
      headers: { 'api-key': API_KEY }
    });
    const chapters = chaptersResponse.data.data;
    
    // Select a random chapter
    const randomChapter = chapters[Math.floor(Math.random() * chapters.length)];
    
    // Get the content of the random chapter
    const contentResponse = await axios.get(`${BASE_URL}/bibles/${BIBLE_ID}/chapters/${randomChapter.id}`, {
      headers: { 'api-key': API_KEY },
      params: { 'content-type': 'text' }
    });
    const content = contentResponse.data.data.content;

    res.json({
      book: randomBook.name,
      chapter: randomChapter.number,
      content: content
    });
  } catch (err) {
    console.error('Error fetching scripture:', err.message);
    if (err.response) {
      console.error('Error response:', err.response.data);
    }
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;