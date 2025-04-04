const DropdownSelector = () => (
    <div className="relative inline text-left border-[#1D1D1D] border rounded-3xl h-8">
      <select className="bg-black text-white border-[#1D1D1D] rounded-3xl pl-4 w-[108px] h-6 mt-1 mb-1">
        <option>Visitors</option>
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
      </select>
    </div>
  );
  
  export default DropdownSelector;
  