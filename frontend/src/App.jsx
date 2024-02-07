import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    </>
  )
}

export default App
