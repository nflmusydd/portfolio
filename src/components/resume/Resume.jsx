import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experience from './Experience'
import Certifications from './Certifications'

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="resume" className="w-full py-20 px-10 border-b border-b-blue-700">
      <div className="flex justify-center items-center text-center">
        <Title title="BACKGROUND & EXPERIENCE" des="My Resume" />
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border border-black/20 rounded-lg overflow-hidden shadow-shadowOne">
          <li 
            onClick={() => setActiveTab("experience")}
            className={`w-full h-20 flex justify-center items-center text-sm md:text-lg font-medium cursor-pointer hover:bg-black/30 hover:text-designColor transition-colors duration-300 ${
              activeTab === "experience" 
                ? "bg-black/30 text-designColor border-designColor border-b-4" 
                : "text-gray-400 bg-transparent border-transparent border-b-4"
            }`}
          >
            Experience
          </li>
          <li 
            onClick={() => setActiveTab("skills")}
            className={`w-full h-20 flex justify-center items-center text-sm md:text-lg font-medium cursor-pointer hover:bg-black/30 hover:text-designColor transition-colors duration-300 ${
              activeTab === "skills" 
                ? "bg-black/30 text-designColor border-designColor border-b-4" 
                : "text-gray-400 bg-transparent border-transparent border-b-4"
            }`}
          >
            Professional Skills
          </li>
          <li 
            onClick={() => setActiveTab("education")}
            className={`w-full h-20 flex justify-center items-center text-sm md:text-lg font-medium cursor-pointer hover:bg-black/30 hover:text-designColor transition-colors duration-300 ${
              activeTab === "education" 
                ? "bg-black/30 text-designColor border-designColor border-b-4" 
                : "text-gray-400 bg-transparent border-transparent border-b-4"
            }`}
          >
            Education
          </li>
          <li 
            onClick={() => setActiveTab("certifications")}
            className={`w-full h-20 flex justify-center items-center text-sm md:text-lg font-medium cursor-pointer hover:bg-black/30 hover:text-designColor transition-colors duration-300 ${
              activeTab === "certifications" 
                ? "bg-black/30 text-designColor border-designColor border-b-4" 
                : "text-gray-400 bg-transparent border-transparent border-b-4"
            }`}
          >
            Certifications
          </li>
        </ul>
      </div>

      <div className="mt-10 min-h-125">
        {activeTab === "education" && <Education />}
        {activeTab === "certifications" && <Certifications />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
      </div>
    </section>
  )
}

export default Resume
