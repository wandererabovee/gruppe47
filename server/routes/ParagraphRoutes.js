import express from 'express';
const router = express.Router();

router.get('/api/paragraph', (req, res) => {
    const paragraph = "Im Alter von sechs Jahren begann Bismarcks schulische Ausbildung...";
    res.json({ paragraph });
});

router.post('/api/translate', async (req, res) => {
    const { word } = req.body;

    const translations = {
        Im: "In",
        Alter: "Age",
        von: "of",
        sechs: "six",
        Jahren: "years",
        begann: "began",
        schulische: "academic",
        Ausbildung: "education",
    };

    const translation = translations[word] || "Translation not found";
    res.json({ german: word, english: translation });
});

export default router;
