import React from 'react';

export const SkillBar = ({ skill, percentage }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium text-gray-300">{skill}</p>
    <span className="w-full h-2 bg-black/40 inline-flex rounded-md mt-2">
      <span 
        className="h-full bg-linear-to-r from-blue-600 via-blue-300 to-designColor rounded-md relative transition-all duration-1000 ease-in-out" 
        style={{ width: percentage }}
      >
        <span className="absolute -top-7 right-0 text-sm font-semibold text-gray-300">
          {percentage}
        </span>
      </span>
    </span>
  </div>
);

export const SoftSkillCard = ({ title, desc }) => (
  <div className="flex flex-col">
    <p className="text-sm uppercase font-medium text-gray-300">{title}</p>
    <span className="w-full h-2 bg-black/40 inline-flex rounded-md mt-2">
      <span className="w-full h-full bg-linear-to-r from-blue-600 via-blue-300 to-designColor rounded-md transition-all duration-1000 ease-in-out"></span>
    </span>
    <p className="text-xs md:text-sm text-gray-400 mt-2 leading-relaxed">{desc}</p>
  </div>
);