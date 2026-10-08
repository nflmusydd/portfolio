import React from 'react'
import {AiFillCode } from "react-icons/ai";
import { FaMobile, FaStickyNote} from "react-icons/fa";
import {SiCompilerexplorer, SiSecurityscorecard } from "react-icons/si";
import { MdOutlineWeb } from "react-icons/md";
import Title from '../layouts/Title'
import Card from './FeatureCard'

const Features = () => {
  return (
    <section 
      id="features" 
      className="w-full h-full pt-10 pb-20 px-10 border-b border-b-blue-700"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-10">
        <Card
         title="Web Development"
         des = "Building robust frontend and backend functionality across diverse technology stacks, prioritizing reliable system performance, clean logic, and fully responsive layouts that adapt seamlessly from desktop to mobile."
         icon={<MdOutlineWeb />}
        />
        <Card
         title="Mobile App Development"
         des = "Leveraging Flutter Framework to accelerate development process without compromising quality, delivering native-like performance and smooth UI consistency across various OS versions."
         icon={<FaMobile />}
        />
        <Card
         title="Functional & Non-functional Tests"
         des = "Ensuring system reliability by moving beyond standard functional checks to thoroughly evaluate critical backend metrics, including performance efficiency and security standards"
         icon={<SiSecurityscorecard />}
        />
        <Card
         title="Clean Code"
         des = "Writing maintainable, readable code and implementing clean architecture principles when needed, ensuring long-term scalability and effortless handoffs for future developers."
         icon={<AiFillCode />}
        />
        <Card
         title="Technical Documentation"
         des = "Crafting clear, structured documentation for both solo and team projects, serving as a reliable reference for future maintenance and long-term project continuity."
         icon={<FaStickyNote />}
        />
        <Card
         title="Tool Research & Customization"
         des = "Exploring, evaluating, and custom-modifying open-source tools to streamline development pipelines, boost engineering efficiency, and optimize the overall build process."
         icon={<SiCompilerexplorer />}
        />

      </div>

    </section>
  )
}

export default Features
