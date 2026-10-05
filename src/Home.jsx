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

    // <div className="p-10 bg-slate-100 min-h-screen">
    //   <h1 className="text-3xl font-bold text-blue-600">
    //     Test Tailwind
    //   </h1>
    //   <div>
    //     <h1 className="font-titleFont text-4xl font-bold">
    //       Ini Judul Pakai Montserrat
    //     </h1>
    //     <p className="font-bodyFont text-gray-600 mt-2">
    //       Ini teks paragraf biasa yang menggunakan font Poppins.
    //     </p>
    //   </div>
    // </div>
  )
}

export default App
