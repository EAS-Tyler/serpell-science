import { useEffect, useState } from "react";
import logo from "./logo.jpeg";
import "./App.css";

function App() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          backgroundColor: "#ffffff",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <img src={logo} alt="logo" width="500" height="500" 
        />
        <p style={{ color: "#000000" }}>Work in progress...{dots}</p>
      </header>
    </div>
  );
}

export default App;
