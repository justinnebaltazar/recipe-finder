import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectPitch } from './components/ProjectPitch'
import { Router } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectPitch/>
    </>
  )
}

export default App
