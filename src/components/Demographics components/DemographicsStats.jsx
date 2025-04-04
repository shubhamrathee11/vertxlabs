const DemographicsStats = ({ countries }) => (
    <div className="w-full md:w-[238px] flex flex-col justify-center space-y-2 md:mb-10 pb-5 border-[#1D1D1D] sm:pb-5 border-b-2">
      {countries.map(({ name, code, color, percentage }, index) => (
        <div key={index} className="flex items-center w-full md:w-[238px] h-[33px]">
          {/* Flag */}
          <img
            src={`https://flagcdn.com/w40/${code}.png`}
            alt={name}
            className="w-5 h-3 rounded-sm mr-2"
          />
  
          {/* Country Name & Progress Bar */}
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
              <span className="text-[14px]">{name}</span>
              <span className="text-gray-400 text-xs">{percentage}%</span>
            </div>
  
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-gray-700 rounded-lg overflow-hidden mt-1">
              <div className="h-full" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default DemographicsStats;

  