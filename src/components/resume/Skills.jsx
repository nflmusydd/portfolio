import React from 'react'
import { SkillBar, SoftSkillCard } from './SkillCard'

const Skills = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
      
      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-3xl font-bold">Programming</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Laravel" percentage="95%" />
          <SkillBar skill="Go" percentage="80%" />
          <SkillBar skill="Flutter" percentage="80%" />
          <SkillBar skill="JavaScript" percentage="75%" />
          <SkillBar skill="TypeScript" percentage="60%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Tech Stack</p>
          <h2 className="text-3xl font-bold">Database & Tools</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="MySQL" percentage="90%" />
          <SkillBar skill="PostgreSQL" percentage="75%" />
          <SkillBar skill="Git" percentage="85%" />
          <SkillBar skill="Docker" percentage="70%" />
          <SkillBar skill="Unity" percentage="50%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Applications</p>
          <h2 className="text-3xl font-bold">Software</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar skill="Microsoft Word" percentage="95%" />
          <SkillBar skill="Microsoft Excel" percentage="85%" />
          <SkillBar skill="OBS Studio" percentage="80%" />
        </div>
      </div>

      <div className="w-full">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Interpersonal</p>
          <h2 className="text-3xl font-bold">Soft Skills</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
          <SoftSkillCard 
            title="Collaboration" 
            desc="Accustomed to working effectively within team environments to achieve shared goals." 
          />
          <SoftSkillCard 
            title="Time Management" 
            desc="Highly capable of prioritizing tasks efficiently to meet strict deadlines." 
          />
          <SoftSkillCard 
            title="Adaptability" 
            desc="Continuously adapting to the latest technologies to streamline workflows." 
          />
          <SoftSkillCard 
            title="Critical Thinking" 
            desc="Evaluating situations deeply and analytically before executing decisions." 
          />
        </div>
      </div>

    </div>
  )
}

export default Skills