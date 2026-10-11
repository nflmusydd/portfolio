import React from 'react'
import ResumeCard from './ResumeCard'
import { backendBootcampCert, sqlBasicCert} from "../../assets/index"

const Certifications = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pt-6 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px]">Verified Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
      </div>
      <div className="mt-6 md:mt-10 w-full border-l-[6px] border-l-black/20 flex flex-col gap-10">
        <ResumeCard
          title="IT Bootcamp Backend Developer"
          subTitle="BINUS University"
          des='Achieved "Outstanding Performance" while gaining hands-on experience in building scalable backend applications, RESTful APIs, and understanding microservices architecture using Go.'
          result={"Completed"}
          src={backendBootcampCert}
          isImage={true}
        />
        <ResumeCard
          title="SQL Basic"
          subTitle="HackerRank"
          des="Successfully passed the SQL basic assessment covering data querying, joining tables, and database fundamentals."
          result={"Passed"}
          src={sqlBasicCert}
          isImage={true}
        />
      </div>
    </div>
  )
}

export default Certifications