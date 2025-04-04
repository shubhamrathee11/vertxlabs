import SidebarHeader from "./SidebarHeader";
import SidebarIcons from "./SidebarIcons";
import SidebarMenu from "./SidebarMenu";

const DesktopSidebar = ({ activeItem }) => (
  <div className="hidden md:flex flex-col bg-black text-white border-r mt-[3px] z-99 border-[#1D1D1D] h-screen fixed top-0 left-0 w-[240px]">
    <SidebarHeader />
    <SidebarIcons />
    <SidebarMenu activeItem={activeItem} />
  </div>
);

export default DesktopSidebar;
