import React from 'react'
import ResumeCard from './ResumeCard'
import { binusLogo } from "../../assets/index"

const Education = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pt-6 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">2022 - 2026</p>
        <h2 className="text-3xl md:text-4xl font-bold">Academic Background</h2>
      </div>
      <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
        <ResumeCard
          title="Bachelor of Science in Computer Science study program"
          subTitle="Bina Nusantara University (2022–2026)"
          result="GPA: 3.77 / 4.00"
          des="Successfully graduated with a Bachelor's degree (High Merit) in 3.5 years. Focused on software engineering, database management, and system architecture. Actively participated in campus organizations and practical technology implementations."
          src={binusLogo}
        />
      </div>
    </div>
  )
}

export default Education