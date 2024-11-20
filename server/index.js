import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; img-src *;");
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.post('/api/translate', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).json({ error: 'Text is required' });
    }

    try {
        const response = await axios.post(
            'https://api-free.deepl.com/v2/translate',
            new URLSearchParams({
                auth_key: process.env.DEEPL_API_KEY,
                text: text,
                target_lang: 'EN',
            }),
            { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error translating text:', error);
        res.status(500).json({ error: 'Failed to translate text' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
