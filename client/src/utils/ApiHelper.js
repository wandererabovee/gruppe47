export async function fetchTranslation(word) {
    try {
      const response = await fetch("http://localhost:3000/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: word }),
      });
      const data = await response.json();
      return data.translation;
    } catch (error) {
      console.error("Translation API error:", error);
      return "Error translating";
    }
  }
  