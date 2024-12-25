// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg
import './App.css'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App
