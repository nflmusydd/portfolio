import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { pawtastic1, pawtastic2, pawtastic3, pawtastic4, pawtastic5, booking_microservices, ip1, ip2, ip3, ip4, ip5, pulse1, pulse2, pulse3, shrinkbg1, shrinkbg2, shrinkbg3, shrinkbg4, boomballoon1, boomballoon2, boomballoon3, boomballoon4 } from "../../assets/index";

const Projects = () => {
  return (
    <section id="projects" className="w-full h-full py-20 px-10 border-b border-b-blue-700">
      <div className="flex justify-center items-center text-center">
        <Title title="Visit" des="My Projects" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <ProjectCard
          title="Booking Platform Backend Microservices"
          des="Distributed microservices booking system consisting of Core, Booking, and Payment services.
              Built with Go, RabbitMQ, postgreSQL, Redis, and Docker. Each services structure follows Clean Architecture pattern for maintainability.
              "
          images={[booking_microservices]} 
          githubLink="https://github.com/nflmusydd/booking-platform-microservices"
        />

        <ProjectCard
          title="Pawtastic Mobile Apps"
          des="Online E-commerce app for pet supplies with interesting UI Design. Built with
              Flutter framework and Supabase (postgres) as backend for authentication and database.
              Integrated third-party services including RajaOngkir for logistics and Gemini API for AI-powered
              features.
              "
          images={[pawtastic1, pawtastic2, pawtastic3, pawtastic4, pawtastic5]} 
          githubLink="https://github.com/nflmusydd/pawtastic-petshop-mobile"
          webLink="https://drive.google.com/file/d/1tDCj8w-qGnb4qcbUjajk8WYndncp6fvW/view?usp=drive_link"
        />

        <ProjectCard
          title="Internal Platform Web Apps"
          des="An internal company website with a comprehensive sysadmin menu for user and role-permission system. Menus or modules can also be manually configured by the administrator."
          images={[ip1, ip2, ip3, ip4, ip5]} 
          githubLink="https://github.com/nflmusydd/internal-platform"
        />

        <ProjectCard
          title="Laravel Pulse Multi App Monitor"
          des="Extended Laravel Pulse library into a scalable, centralized dashboard capable of tracking performance across multiple Laravel applications, which was originally designed for single-app monitoring."
          images={[pulse1, pulse2, pulse3]} 
          githubLink="https://github.com/nflmusydd/Laravel-Pulse-Multi-App-Monitoring"
        />

        <ProjectCard
          title="Shrink BG"
          des="Web-based, client-side image processing tool built with TypeScript allows to remove image backgrounds automatically and refine masks using a built-in canvas editor with undo/redo support. Background colors can be customized and compressed in offline mode."
          images={[shrinkbg1, shrinkbg2, shrinkbg3, shrinkbg4]} 
          githubLink="https://github.com/nflmusydd/shrink-bg"
        />

        <ProjectCard
          title="Boom Balloon Markerless AR Game"
          des="Spawn 3D balloon objects using smartphone camera, and shoot the balloon to get the highest score. Challenge yourself in the timed mode against the clock, or enjoy a relaxed experience in the untimed free-play mode."
          images={[boomballoon1, boomballoon2, boomballoon3, boomballoon4]}
          githubLink="https://github.com/nflmusydd/boomballoon-AR"
          webLink="https://drive.google.com/file/d/1zFxdGUFgJxwTVN6cqavddEQ5AhMqhGPz/view?usp=drive_link"
        />

      </div>
    </section>
  )
}

export default Projects;
