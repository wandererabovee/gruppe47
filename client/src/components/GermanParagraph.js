import { useState, useEffect } from 'react';

const GermanParagraph = ({ onWordTranslate }) => {
    const [paragraph, setParagraph] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api/paragraph')
            .then((res) => res.json())
            .then((data) => setParagraph(data.paragraph))
            .catch((err) => console.error("Error fetching paragraph:", err));
    }, []);

    const handleWordClick = async (word) => {
        try {
            const response = await fetch('http://localhost:3000/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ word }),
            });
            const data = await response.json();
            onWordTranslate(data);
        } catch (error) {
            console.error("Error translating word:", error);
        }
    };

    return (
        <div>
            <h2>German Paragraph</h2>
            {paragraph ? (
                <p>
                    {paragraph.split(' ').map((word, index) => (
                        <span
                            key={index}
                            onClick={() => handleWordClick(word)}
                            style={{ cursor: 'pointer', marginRight: '5px' }}
                        >
                            {word}
                        </span>
                    ))}
                </p>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default GermanParagraph;
