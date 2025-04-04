const OverviewFilters = () => (
    <div className="flex justify-start space-x-3 text-white text-sm mb-2">
      <select className="bg-black border border-gray-600 px-2 py-1 rounded-2xl">
        <option>Visitors</option>
      </select>
      <select className="bg-black border border-gray-600 px-2 py-1 rounded-2xl">
        <option>Last 30 days</option>
      </select>
      <select className="hidden sm:block bg-black border border-gray-600 px-2 py-1 rounded-2xl">
        <option>Connections</option>
      </select>
      <button className="block sm:hidden px-3 py-1 rounded-2xl border border-dotted border-gray-500 text-gray-400 hover:text-white">
        + Add
      </button>
    </div>
  );
  
  export default OverviewFilters;
  