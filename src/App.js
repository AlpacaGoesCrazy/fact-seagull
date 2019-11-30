import React, { useState, useRef } from 'react';
import './App.css';
import img from './media/animation.gif'
import audio from './media/sad_loop.mp3'
import darkness from './data/darkness.json'
import facts from './data/facts.json'

function getRandomFact() {
  const shouldDieInside = Math.random() < 0.3
  const factArray = shouldDieInside ? darkness : facts
  const i = Math.floor(Math.random() * factArray.length)
  return factArray[i]
}

function getViewLength(fact) {
  const averageReadSpeed = 200 
  const wordNumber = fact.split(" ").length
  return Math.ceil(wordNumber / averageReadSpeed * 60 * 1.2 * 1000)
}

function App() {
  const [fact, setFact] = useState(() => getRandomFact())
  const interval = useRef()

  interval.current = setTimeout(() => {
    setFact(getRandomFact())
  }, getViewLength(fact))

  return (
    <div className="App">
      <p>Fact Seagull says:</p>
      <img src={img} alt="seagull"/>
      <p className="Fact">{fact}</p>
      <audio autoPlay loop>
        <source src={audio} type="audio/mpeg"/>
      </audio> 
    </div>
  );
}

export default App;
