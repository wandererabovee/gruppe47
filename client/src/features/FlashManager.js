import { saveToStorage, getFromStorage } from "../utils/StorageHelper";

export function saveFlashcard(german, english) {
  const flashcards = getFromStorage("flashcards") || [];
  flashcards.push({ german, english });
  saveToStorage("flashcards", flashcards);
}

export function getFlashcards() {
  return getFromStorage("flashcards") || [];
}
