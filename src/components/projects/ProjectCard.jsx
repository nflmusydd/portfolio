import React, { useState } from 'react';
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, images, githubLink, webLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-linear-to-r from-bodyColor to-[#040c24] group hover:bg-linear-to-b hover:from-bodyColor hover:to-black transition-colors duration-500">
      
      <div className="relative w-full h-60 overflow-hidden rounded-lg group/slider">
        
        <div 
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((imgSrc, index) => (
            <div key={index} className="w-full h-full shrink-0 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover/slider:scale-110 transition-transform duration-700 cursor-pointer"
                src={imgSrc}
                alt={`project_image_${index}`}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
            <button 
              onClick={prevImage}
              className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10"
            >
              <BsChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImage}
              className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10"
            >
              <BsChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              {webLink && (
                <a 
                  href={webLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <FaGlobe />
                </a>
              )}
              
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"
                >
                  <BsGithub />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
