import icon from "../../assets/icon.jpg";
import { FaPlus } from "react-icons/fa";

const SidebarIcons = () => (
  <div className="w-[50px] h-full flex flex-col items-center justify-between border-r border-[#1D1D1D]">
    <div className="w-[50px] h-[50px] flex items-center justify-center border-b border-[#1D1D1D]">
      <img src={icon} alt="Icon" className="w-[30px] h-[30px] rounded-full" />
    </div>
    <div className="w-[50px] h-[50px] flex items-center justify-center border-t border-[#1D1D1D]">
      <button className="w-[24px] h-[24px] bg-black flex items-center justify-center text-white rounded">
        <FaPlus />
      </button>
    </div>
  </div>
);

export default SidebarIcons;
