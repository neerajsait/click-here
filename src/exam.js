import React, { useState } from 'react';
import './App.css';

function MessageButton() {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["hello", "welcome", "hi", "how are you"];

  const handleClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  return (
    <div>
      <button onClick={handleClick}>Show Message</button>
      <p>{messages[messageIndex]}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Message App</h1>
        <MessageButton />
      </header>
    </div>
  );
}

export default App;