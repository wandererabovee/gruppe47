import React, { useState, useEffect } from 'react';

const ExamplePage = () => {
    const [paragraph, setParagraph] = useState('');
    const [translations, setTranslations] = useState([]);

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
            setTranslations((prev) => [...prev, data]);
        } catch (error) {
            console.error("Error translating word:", error);
        }
    };

    return (
        <div>
            <h2>Example Page</h2>
            <div>
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
                {translations.length > 0 && (
                    <div>
                        <h3>Translations:</h3>
                        <ul>
                            {translations.map((item, index) => (
                                <li key={index}>
                                    {item.german} → {item.english}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamplePage;
