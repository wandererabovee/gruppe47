import { useState, useEffect } from "react";
import ExamplePage from "./pages/ExamplePage";
import ReadingPage from "./pages/ReadingPage";


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
      <ExamplePage />
    </div>
  );
}

export default App;
