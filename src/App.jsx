import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { Header } from './components/Header/Header'
import { Section1 } from './components/Section-1/Section'
import { Section2 } from './components/Section_2/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
