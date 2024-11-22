export const saveToStorage = (key, value) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    const lowercasedExisting = existingData.map(item => item.german.toLowerCase());
  
    if (!lowercasedExisting.includes(value.german.toLowerCase())) {
      existingData.push(value);
      localStorage.setItem(key, JSON.stringify(existingData));
    }
  };
  
  export const getFromStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };
  