const DashboardNav = () => {
    return (
      <div className="flex flex-col md:flex-row md:items-center w-full border-b border-[#1D1D1D] px-4 md:px-6 mt-4 md:mt-0">
        {/* Mobile View: Overview, Reports, Demographics */}
        <div className="flex justify-between w-full md:hidden">
          <h2 className="text-white text-[16px] pb-1.5 border-b-2 leading-[100%]" style={{ letterSpacing: "-0.04em" }}>
            Overview
          </h2>
          <span className="text-gray-400 text-sm">Reports</span>
          <span className="text-gray-400 text-sm">Demographics</span>
        </div>
  
        {/* Desktop View: Overview, Demographics, More */}
        <div className="hidden md:flex space-x-4 w-full">
          <h2 className="w-[120px] h-[50px] border-[#1D1D1D] items-center justify-center hidden md:flex" style={{ letterSpacing: "-0.04em" }}>
            Overview
          </h2>
          <div className="w-[120px] h-[50px] border-l border-[#1D1D1D] border-r flex items-center justify-center">
            <span className="text-gray-400 text-sm">Demographics</span>
          </div>
        </div>
        <div className="w-[120px] h-[50px] border-l mr-[13px] border-[#1D1D1D] text-gray-400 items-center justify-center hidden md:flex">
          <button className="text-sm">More</button>
        </div>
      </div>
    );
  };
  
  export default DashboardNav;
  