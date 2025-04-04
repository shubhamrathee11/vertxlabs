import React from "react";
import DemographicsHeader from "./Demographics components/DemographicsHeader";
import DemographicsMap from "./Demographics components/DemographicsMap";
import DemographicsStats from "./Demographics components/DemographicsStats";

const countries = [
  { name: "India", code: "in", color: "#8B5CF6", percentage: 40, coordinates: [78.9629, 20.5937] },
  { name: "USA", code: "us", color: "#F97316", percentage: 25, coordinates: [-95.7129, 37.0902] },
  { name: "Canada", code: "ca", color: "#EAB308", percentage: 10, coordinates: [-106.3468, 56.1304] },
  { name: "UAE", code: "ae", color: "#10B981", percentage: 7, coordinates: [53.8478, 23.4241] },
];

const Demographics = () => {
  return (
    <div className="bg-black text-white rounded-lg sm:w-[3px] p-3 shadow-lg md:w-[98.5%] border-2 m-4 border-[#1D1D1D] relative h-auto mb-15">
      <DemographicsHeader />
      <div className="flex flex-col md:flex-row relative md:h-[260px] h-auto">
        <DemographicsMap countries={countries} />
        <DemographicsStats countries={countries} />
      </div>
      {/* Country Legend (Hidden on Mobile) */}
  <div className="hidden md:flex absolute bottom-2 left-3 flex-wrap space-x-2 bg-black px-2 py-1 rounded-md border border-[#1D1D1D] text-xs">
  {countries.map(({ name, color }) => (
    <div key={name} className="flex items-center space-x-1">
      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }}></span>
      <span className="text-gray-400">{name}</span>
    </div>
  ))}
</div>

{/* View All Countries (Bottom Right) */}
<div className="flex justify-end md:mr-36 mt-4">
  <button className="text-gray-400 text-[14px] flex items-center hover:text-white">
    View all countries →
  </button>
</div>
    </div>
  );
};

export default Demographics;
