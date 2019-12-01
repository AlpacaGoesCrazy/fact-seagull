import React, { useState, useRef, useCallback } from 'react'
import Music from './components/Music'
import './App.css'
import img from './media/animation.gif'
import darkness from './data/darkness.json'
import facts from './data/facts.json'

function App() {
  const darknessLevel = useRef(1)

  const getRandomFact = () => {
    const darknessProbability = 0.2 + Math.log10(darknessLevel.current) / 10
    console.log({darknessProbability})
    const shouldGiveIn = Math.random() < darknessProbability
    const factArray = shouldGiveIn ? darkness : facts
    const i = Math.floor(Math.random() * factArray.length)
    return factArray[i]
  }

  const getViewLength = useCallback((fact) => {
    const averageReadSpeed = 200 
    const wordNumber = fact.split(" ").length
    return Math.ceil(wordNumber / averageReadSpeed * 60 * 1.2 * 1000)
  }, [])

  const [fact, setFact] = useState(() => getRandomFact())
  const interval = useRef()

  interval.current = setTimeout(() => {
    setFact(getRandomFact())
    darknessLevel.current = darknessLevel.current + 1
  }, getViewLength(fact))

  return (
    <div className="App">
      <p>Fact Seagull says:</p>
      <img src={img} alt="seagull"/>
      <p className="Fact">{fact}</p>
      <Music/>
    </div>
  )
}

export default App
