import React, { useState } from 'react';
import './App.css';
function MessageButton() {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Today is a new opportunity to create, explore, and inspire. Embrace the day with enthusiasm!", "The sunrise reminds us that every day holds the potential for beauty and growth. Let's make the most of it", "The morning breeze whispers possibilities, the birds sing melodies of hope. Let's greet the day with open hearts and open minds.", "Every morning is a new chapter in the story of your life. Write it with intention, purpose, and positivity"];
  const handleClick = () => {
    setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };
  return (
    <div>
      <button onClick={handleClick} className='button'>click here</button>
      <p>{messages[messageIndex]}</p>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <MessageButton />
      </header>
    </div>
  );
}
export default App;
