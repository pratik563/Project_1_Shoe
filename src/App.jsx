import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Hero/>
    </>
  )
}

export default App
