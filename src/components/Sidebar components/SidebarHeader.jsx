import logo from "../../assets/logo.svg";

const SidebarHeader = () => (
  <div className="flex items-center border-b border-[#1D1D1D]">
    <div className="py-2 border-r-1 ml-3 pr-[7px] border-[#1D1D1D]">
      <img src={logo} alt="Logo" className="w-[30px] h-[30px] rounded-full" />
    </div>
    <div className="ml-4 font-bold text-[18px] tracking-[-0.04em]">
      Vertxlabs, Inc
    </div>
  </div>
);

export default SidebarHeader;
