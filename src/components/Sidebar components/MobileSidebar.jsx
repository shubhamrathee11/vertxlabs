import { FaChartBar, FaUser, FaLink, FaClipboard, FaHome } from "react-icons/fa";
import icon from "../../assets/icon.jpg";

const MobileSidebar = ({ activeItem }) => (
  <>
    <div className="md:hidden fixed top-4 left-4 z-50">
      <img src={icon} alt="Logo" className="w-[30px] h-[30px] rounded-full" />
    </div>
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-[#1D1D1D] flex justify-around py-3 z-99">
      {[
        { name: "Dashboard", icon: <FaHome /> },
        { name: "Analytics", icon: <FaChartBar /> },
        { name: "Connect", icon: <FaLink /> },
        { name: "Dealroom", icon: <FaClipboard /> },
        { name: "Profile", icon: <FaUser /> },
      ].map((item, index) => (
        <a
          key={index}
          href="#"
          className={`text-[24px] transition transform hover:scale-110 
            ${item.name === activeItem ? "text-white" : "text-gray-400"} 
            hover:text-white`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  </>
);

export default MobileSidebar;
