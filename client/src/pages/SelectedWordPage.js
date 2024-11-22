import React from 'react';

const SelectedWordsPage = ({ words }) => {
    return (
        <div>
            <h1>Selected Words</h1>
            <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul>
        </div>
    );
};

export default SelectedWordsPage;
