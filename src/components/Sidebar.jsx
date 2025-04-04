import DesktopSidebar from "./Sidebar components/DesktopSidebar";
import MobileSidebar from "./Sidebar components/MobileSidebar";

const Sidebar = () => {
  const activeItem = "Analytics";

  return (
    <>
      <DesktopSidebar activeItem={activeItem} />
      <MobileSidebar activeItem={activeItem} />
    </>
  );
};

export default Sidebar;
