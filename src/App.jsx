import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectPitch } from './components/ProjectPitch'
import { Router } from 'react-router-dom'
import { ShowAndTell } from './components/ShowAndTell'
import { ShowAndTell2 } from './components/ShowAndTell2'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectPitch/>
      <ShowAndTell/>
      <ShowAndTell2/>
    </>
  )
}

export default App
