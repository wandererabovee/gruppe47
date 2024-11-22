import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import paragraphRoutes from './routes/ParagraphRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(paragraphRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/paragraph or /api/translate.');
});

app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
