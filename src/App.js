
import "./App.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const [nasaData, setNasaData] = useState(/*decide later*/);

  useEffect(() => {
    axios.get()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
