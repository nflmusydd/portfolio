import React from 'react'

const ResumeCard = ({ title, subTitle, result, des, src, isImage = false }) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-10 h-1.5 bg-black/20 mt-16 relative shrink-0">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black/60">
          <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor transition-colors duration-300"></span>
        </span>
      </div>
      
      <div className="w-full bg-black/20 hover:bg-black/30 transition-colors duration-300 rounded-lg p-6 lg:px-10 flex flex-col lg:flex-row gap-6 lg:gap-10 shadow-shadowOne">
        
        <div className="flex-1 flex flex-col justify-start gap-6">
          
          {/* md:flex-row membuat result di kanan title. Saat layar kecil (flex-col), result turun ke bawah subtitle */}
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-200 group-hover:text-white duration-300">
                {title}
              </h3>
              <p className="text-sm mt-2 text-gray-400 group-hover:text-gray-300 duration-300">
                {subTitle}
              </p>
            </div>
            
            {/* Result */}
            {result && (
              <div>
                <span className="px-4 py-2 text-designColor bg-black/25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                  {result}
                </span>
              </div>
            )}
          </div>

          {/* Deskripsi & Logo Kecil */}
          <div className="flex flex-col md:flex-row gap-6 items-start mt-2">
            {src && !isImage && (
              <img 
                src={src} 
                alt="logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg bg-white/5 p-2 shadow-sm shrink-0 self-center md:self-start" 
              />
            )}
            <div className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 flex-1">
              {Array.isArray(des) ? (
                <ul className="list-disc ml-5 flex flex-col gap-2">
                  {des.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{des}</p>
              )}
            </div>
          </div>

        </div>

        {/* Gambar Besar (isImage = true) */}
        {src && isImage && (
          <div className="w-full lg:w-72 xl:w-80 overflow-hidden rounded-lg shadow-shadowOne shrink-0 self-start">
            <img 
              src={src} 
              alt="certificate" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg" 
            />
          </div>
        )}
        
      </div>
    </div>
  )
}

export default ResumeCard