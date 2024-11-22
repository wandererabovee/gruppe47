import { useState } from 'react';
import GermanParagraph from '../components/GermanParagraph';

const ReadingPage = () => {
    const [translations, setTranslations] = useState([]);

    const handleWordTranslate = (translation) => {
        setTranslations((prev) => [...prev, translation]);
    };

    return (
        <div>
            <h1>Reading Page</h1>
            <GermanParagraph onWordTranslate={handleWordTranslate} />
            <h2>Selected Words and Translations</h2>
            <ul>
                {translations.map((item, index) => (
                    <li key={index}>
                        {item.german} - {item.english}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadingPage;
