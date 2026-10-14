import React from 'react'
import { useTranslation } from 'react-i18next'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { pawtastic1, pawtastic2, pawtastic3, pawtastic4, pawtastic5, booking_microservices, ip1, ip2, ip3, ip4, ip5, pulse1, pulse2, pulse3, shrinkbg1, shrinkbg2, shrinkbg3, shrinkbg4, boomballoon1, boomballoon2, boomballoon3, boomballoon4 } from "../../assets/index";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects" className="w-full h-full py-20 px-4 md:px-10 border-b border-b-blue-700">
      <div className="flex justify-center items-center text-center">
        <Title title={t('projects.visit', 'Visit')} des={t('projects.title', 'Visit')} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <ProjectCard
          title="Booking Platform Backend Microservices"
          des={t('projects.desc.bookingPlatform')}
          images={[booking_microservices]} 
          githubLink="https://github.com/nflmusydd/booking-platform-microservices"
        />

        <ProjectCard
          title="Pawtastic Mobile Apps"
          des={t('projects.desc.pawtastic')}
          images={[pawtastic1, pawtastic2, pawtastic3, pawtastic4, pawtastic5]} 
          githubLink="https://github.com/nflmusydd/pawtastic-petshop-mobile"
          webLink="https://drive.google.com/file/d/1tDCj8w-qGnb4qcbUjajk8WYndncp6fvW/view?usp=drive_link"
        />

        <ProjectCard
          title="Internal Platform Web Apps"
          des={t('projects.desc.internalPlatform')}
          images={[ip1, ip2, ip3, ip4, ip5]} 
          githubLink="https://github.com/nflmusydd/internal-platform"
        />

        <ProjectCard
          title="Laravel Pulse Multi App Monitor"
          des={t('projects.desc.laravelPulse')}
          images={[pulse1, pulse2, pulse3]} 
          githubLink="https://github.com/nflmusydd/Laravel-Pulse-Multi-App-Monitoring"
        />

        <ProjectCard
          title="Shrink BG"
          des={t('projects.desc.shrinkBg')}
          images={[shrinkbg1, shrinkbg2, shrinkbg3, shrinkbg4]} 
          githubLink="https://github.com/nflmusydd/shrink-bg"
        />

        <ProjectCard
          title="Boom Balloon Markerless AR Game"
          des={t('projects.desc.boomBalloon')}
          images={[boomballoon1, boomballoon2, boomballoon3, boomballoon4]}
          githubLink="https://github.com/nflmusydd/boomballoon-AR"
          webLink="https://drive.google.com/file/d/1zFxdGUFgJxwTVN6cqavddEQ5AhMqhGPz/view?usp=drive_link"
        />

      </div>
    </section>
  )
}

export default Projects;
