const SelectedWords = ({ words }) => (
    <div>
        <h3>Selected Words</h3>
        <ul>
            {words.map((word, index) => (
                <li key={index}>{word}</li>
            ))}
        </ul>
    </div>
);

export default SelectedWords;
