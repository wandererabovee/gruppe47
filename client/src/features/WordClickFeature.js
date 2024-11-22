import { fetchTranslation } from "../utils/ApiHelper";

export default function useWordClick(setTranslations) {
  return async (word, selectedWords, setSelectedWords) => {
    const updatedWords = selectedWords.includes(word)
      ? selectedWords.filter((w) => w !== word)
      : [...selectedWords, word];

    setSelectedWords(updatedWords);

    if (!selectedWords.includes(word)) {
      const translation = await fetchTranslation(word);
      setTranslations((prev) => ({ ...prev, [word]: translation }));
    }
  };
}
