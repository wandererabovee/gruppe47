import { useState, useEffect } from "react";
import GermanParagraph from "./component/GermanParagraph";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/ping")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>React + Bun Server</h1>
      <p>{message || "Loading..."}</p>
      <GermanParagraph /> 
    </div>
  );
}

export default App;
