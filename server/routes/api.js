// server/routes/api.js
const express = require('express');
const router = express.Router();

// Sample API route
router.get('/sample', (req, res) => {
  res.json({ message: 'This is a sample API route.' });
});

module.exports = router;
