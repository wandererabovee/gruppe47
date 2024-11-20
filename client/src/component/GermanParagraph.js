import { useState } from 'react';

function GermanParagraph() {
  const paragraph = `Im Alter von sechs Jahren begann Bismarcks schulische Ausbildung 1821 auf Wunsch der Mutter...`;

  const [selectedWords, setSelectedWords] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [translations, setTranslations] = useState({});
  const [showTranslations, setShowTranslations] = useState(false);

  const handleWordClick = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleDone = () => {
    setIsDone(true);
    const fakeTranslations = selectedWords.reduce((acc, word) => {
      acc[word] = { german: word, english: `${word} (English)` }; 
      return acc;
    }, {});
    setTranslations(fakeTranslations);
  };

  const handleNext = () => {
    setShowTranslations(true);
  };

  return (
    <div>
      <h2>German Paragraph</h2>
      <p>
        {paragraph.split(" ").map((word, index) => (
          <span 
            key={index}
            onClick={() => handleWordClick(word)}
            style={{ cursor: 'pointer', color: 'blue' }}
          >
            {word}{" "}
          </span>
        ))}
      </p>

      {!isDone && (
        <button onClick={handleDone}>Done</button>
      )}

      {isDone && !showTranslations && (
        <div>
          <h3>Selected Words and Translations</h3>
          <ul>
            {selectedWords.map((word, index) => (
              <li key={index}>
                {word}
              </li>
            ))}
          </ul>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {showTranslations && (
        <div>
          <h3>Translations</h3>
          <ul>
            {selectedWords.map((word, index) => (
              <li key={index}>
                <strong>{translations[word]?.german}</strong>: {translations[word]?.english}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default GermanParagraph;
