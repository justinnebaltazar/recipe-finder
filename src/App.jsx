import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectPitch } from './components/ProjectPitch'
import { HashRouter, Routes, Route} from 'react-router-dom'
import { ShowAndTell } from './components/ShowAndTell'
import { ShowAndTell2 } from './components/ShowAndTell2'
import { Carousel } from './components/Carousel'
import { TeamBreakdown } from './components/TeamBreakdown'
import { Download } from './components/Download'
import { FinalPresentation } from './components/FinalPresentation'

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Navbar/>
              <Hero/>
              <ProjectPitch/>
              <Download/>
              <FinalPresentation/>
              <TeamBreakdown/>
              <div className="my-8 sm:my-16 md:my-20">
                <Carousel />
              </div>

            </>
          }
        />

        {/* previous project milestone */}
        <Route
          path="/project-milestones"
          element={
            <>
              <Navbar/>
              <ProjectPitch/>
              <ShowAndTell/>
              <ShowAndTell2/>
            </>
          }
        />

      </Routes>
    </HashRouter>
  )
}

export default App
