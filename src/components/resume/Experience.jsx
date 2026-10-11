import React from 'react'
import ResumeCard from './ResumeCard'

const Experience = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
      
      {/* Working Experience */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2025 – 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Working Experience</h2>
        </div>
        <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
          <ResumeCard
            title="PT Hartono Istana Teknologi (Polytron)"
            subTitle="Web Developer (Feb 2025 - Feb 2026)"
            result="Internship"
            des={[
              "Developed and maintained internal company web applications to support daily operations.",
              "Researched tools and technologies to meet business requirements effectively.",
              "Authored comprehensive technical documentation for systems and applications."
            ]}
          />
        </div>
      </div>

      {/* Organization Experience */}
      <div>
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 – Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Organization Experience</h2>
        </div>
        <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
          <ResumeCard
            title="Muamalah Circle"
            subTitle="Community Manager  (Aug 2026 - Present)"
            result="Active"
            des={[
              "Operated live-streaming broadcasts on YouTube and managed technical equipment setups.",
              "Created, structured, and managed community databases efficiently."
            ]}
          />
          <ResumeCard
            title="Majelis Taklim Al-Khawarizmi BINUS Malang"
            subTitle="Syiar Division Coordinator (Jan 2024 - Dec 2024)"
            result="Completed"
            des={[
              "Increased student engagement through campus religious activities and initiatives.",
              "Managed routine religious programs and ensured smooth operational execution."
            ]}
          />
        </div>
      </div>

    </div>
  )
}

export default Experience