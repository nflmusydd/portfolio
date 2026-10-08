import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from './components/intro/Intro'
import Features from './components/features/features'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-4">
        <Navbar/>
        <Intro/>
        <Features/>
        <Projects/>
        <Resume/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
