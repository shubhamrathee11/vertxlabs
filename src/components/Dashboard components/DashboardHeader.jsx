import { useState } from "react";
import logo from "../../assets/logo.svg";

const DashboardHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Centered Logo in Mobile */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:hidden">
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* Top Section */}
      <div className="flex items-center w-full h-[50px] md:border-b sm:border-b-0 border-[#1D1D1D] px-4 md:px-6">
        {/* Analytics (Hidden on Small Screens) */}
        <h2
          className="text-white font-semibold text-[16px] ml-4 leading-[100%] hidden md:block"
          style={{ letterSpacing: "-0.04em" }}
        >
          Analytics
        </h2>

        {/* Desktop: Activity & Log Out */}
        <div className="hidden md:flex space-x-4 ml-auto">
          <div className="w-[120px] h-[50px] border-b border-l border-[#1D1D1D] flex items-center justify-center">
            <span className="text-gray-400 text-sm">Activity</span>
          </div>
          <div className="w-[120px] h-[50px] border-b border-l border-[#1D1D1D] text-gray-400 flex items-center justify-center">
            <button className="text-sm">Log Out</button>
          </div>
        </div>

        {/* Mobile: Three-dot Menu */}
        <div
          className="md:hidden absolute top-4 right-4 cursor-pointer text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </div>

        {/* Dropdown Menu (Mobile) */}
        {menuOpen && (
          <div className="absolute top-[50px] right-4 bg-gray-900 border border-[#1D1D1D] rounded-md shadow-lg w-[150px] flex flex-col z-10">
            <button className="text-left px-4 py-2 hover:bg-gray-800">Analytics</button>
            <button className="text-left px-4 py-2 hover:bg-gray-800">Activity</button>
            <button className="text-left px-4 py-2 hover:bg-gray-800">Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
