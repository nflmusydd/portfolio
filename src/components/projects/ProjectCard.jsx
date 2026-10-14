import React, { useState, useEffect } from 'react';
import { BsGithub, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, images, githubLink, webLink }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimal jarak (dalam pixel) agar terbaca sebagai swipe
  const minSwipeDistance = 50;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalTouchStart, setModalTouchStart] = useState(null);
  const [modalTouchEnd, setModalTouchEnd] = useState(null);

  // Mengunci scroll website saat modal gambar terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isModalOpen]);

  // Swipe card
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextImage();
    else if (distance < -minSwipeDistance) prevImage();
  };
  const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  // Swipe Modal
  const onModalTouchStart = (e) => {
    setModalTouchEnd(null);
    setModalTouchStart(e.targetTouches[0].clientX);
  };
  const onModalTouchMove = (e) => setModalTouchEnd(e.targetTouches[0].clientX);
  const onModalTouchEnd = () => {
    if (!modalTouchStart || !modalTouchEnd) return;
    const distance = modalTouchStart - modalTouchEnd;
    if (distance > minSwipeDistance) nextModalImage();
    else if (distance < -minSwipeDistance) prevModalImage();
  };
  const prevModalImage = () => setModalIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextModalImage = () => setModalIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));


  return (
    <>
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-linear-to-r from-bodyColor to-[#040c24] group hover:bg-linear-to-b hover:from-bodyColor hover:to-black transition-colors duration-500">
        
        {/* Slider card utama */}
        <div 
          className="relative w-full h-60 overflow-hidden rounded-lg group/slider touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          
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
                  draggable="false" 
                    onClick={() => {
                      setModalIndex(index);
                      setIsModalOpen(true);
                    }}
                />
              </div>
            ))}
          </div>

          {images.length > 1 && (
            <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-2 opacity-100 md:opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 pointer-events-none">
              <button 
                onClick={prevImage}
                className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10 pointer-events-auto"
              >
                <BsChevronLeft size={18} />
              </button>
              <button 
                onClick={nextImage}
                className="w-8 h-8 rounded-full bg-black/70 flex items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10 pointer-events-auto"
              >
                <BsChevronRight size={18} />
              </button>
            </div>
          )}
        </div>

        {/* Info Card Utama */}
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

      {/*  Modal Lightbox */}
      <div 
        className={`fixed inset-0 z-100 bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col justify-between items-center py-6 sm:py-10 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setIsModalOpen(false)} // Menutup modal saat area luar diklik
      >
        {/* Close Button */}
        <button 
          className="absolute top-5 right-5 sm:top-8 sm:right-8 text-gray-400 hover:text-designColor transition-colors z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 sm:w-10 sm:h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      {/* Area Gambar Utama modal */}
      {/* efek scale/zoom transisi saat dibuka */}
      <div 
        className={`relative flex-1 w-full flex justify-center items-center px-4 sm:px-16 overflow-hidden transition-all duration-500 delay-100 ease-out ${
          isModalOpen ? "scale-100 translate-y-0 opacity-100" : "scale-90 translate-y-10 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()} // Mencegah klik gambar menutup modal
        onTouchStart={onModalTouchStart}
        onTouchMove={onModalTouchMove}
        onTouchEnd={onModalTouchEnd}
      >
        {images.length > 1 && (
          <>
            {/* Panah Kiri (Hidden di mobile, tampil di md ke atas) */}
            <button 
              onClick={prevModalImage}
              className="hidden md:flex absolute left-4 lg:left-10 w-12 h-12 rounded-full bg-black/50 items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10 backdrop-blur-sm border border-white/10"
            >
              <BsChevronLeft size={24} />
            </button>

            {/* Gambar Utama */}
            <img 
              src={images[modalIndex]} 
              alt="Full Screen Project" 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-opacity duration-300 select-none"
              draggable="false"
            />

            {/* Panah Kanan */}
            <button 
              onClick={nextModalImage}
              className="hidden md:flex absolute right-4 lg:right-10 w-12 h-12 rounded-full bg-black/50 items-center justify-center text-white hover:bg-designColor hover:text-black transition-colors z-10 backdrop-blur-sm border border-white/10"
            >
              <BsChevronRight size={24} />
            </button>
          </>
        )}

        {/* Jika gambar hanya 1, hilangkan panah */}
        {images.length === 1 && (
            <img 
              src={images[modalIndex]} 
            alt="Full Screen Project" 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat gambar itu sendiri yang diklik
            draggable="false"
          />
          )}
      </div>

      {/* List Gambar */}
      {images.length > 1 && (
        <div 
          className={`mt-6 flex gap-3 overflow-x-auto max-w-full px-4 pt-3 pb-4 transition-all duration-500 delay-200 ease-out ${
            isModalOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()} // Mencegah klik area thumbnail menutup modal
        >
          {images.map((imgSrc, index) => (
            <button
              key={index}
              onClick={() => setModalIndex(index)}
              className={`relative w-20 h-14 sm:w-24 sm:h-16 shrink-0 rounded-md overflow-hidden transition-all duration-300 ${
                modalIndex === index 
                  ? "ring-2 ring-designColor scale-110 opacity-100 shadow-lg" 
                  : "ring-1 ring-gray-600 opacity-50 hover:opacity-100 hover:scale-105"
              }`}
            >
              <img 
                src={imgSrc} 
                alt={`thumbnail_${index}`}
                className="w-full h-full object-cover"
                draggable="false"
              />
            </button>
          ))}
        </div>
      )}

      </div>
    </>
  )
}

export default ProjectCard;
