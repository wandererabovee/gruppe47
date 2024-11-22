import express from 'express';
import { saveWord } from '../helpers/StorageHelper.js';

const router = express.Router();

router.post('/api/flashcards', (req, res) => {
    const { word } = req.body;
    if (!word) {
        return res.status(400).json({ error: 'Word is required' });
    }

    saveWord(word);
    res.status(200).json({ message: 'Word saved' });
});

export default router;
