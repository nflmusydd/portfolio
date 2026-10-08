import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const FeatureCard = ({title, des, icon}) => {
  return (
    <div className="w-full px-6 xl:px-12 h-auto py-10 rounded-lg shadow-shadowOne flex items-start bg-linear-to-b from-[#0a3899] via-black to-black border border-white/10 hover:border-bodyColor bg-[length:100%_200%] bg-[position:_0%_0%] hover:bg-[position:_0%_35%] hover:shadow-[0_0_20px_rgba(6,37,105,0.4)] transition-all duration-500">
      <div className="h-auto w-full overflow-hidden">
        <div className="flex h-full flex-col gap-8 md:gap-10 translate-y-4 xl:translate-y-16 group-hover:translate-y-0 transition-transform duration-500">

          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-0.5 rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-0.5 rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-0.5 rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-0.5 rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-bodyFont leading-relaxed">
              {des}
            </p>
            <span className="text-2xl text-designColor mt-2">
              {/* <HiArrowRight /> */}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default FeatureCard