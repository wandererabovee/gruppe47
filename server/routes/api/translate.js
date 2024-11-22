const express = require('express');
const router = express.Router();

router.post('/translate', (req, res) => {
  const { text } = req.body;
  res.json({ translation: `Translated ${text}` });
});

module.exports = router;
