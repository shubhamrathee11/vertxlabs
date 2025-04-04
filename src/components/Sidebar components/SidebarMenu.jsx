const SidebarMenu = ({ activeItem }) => (
    <div className="absolute w-[80px] h-[282px] top-[68px] left-[73px] flex flex-col space-y-3 mt-[-5px]">
      {["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"].map((item, index) => (
        <a
          key={index}
          href="#"
          className={`text-[16px] tracking-[-0.04em] transition 
            ${item === activeItem ? "text-white" : "text-gray-400"} 
            hover:text-white`}
        >
          {item}
        </a>
      ))}
    </div>
  );
  
  export default SidebarMenu;
  