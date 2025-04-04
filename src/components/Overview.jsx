import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = {
  "30": [
    { name: "Mar 1", visitors: 800, connections: 300 },
    { name: "Mar 5", visitors: 1200, connections: 500 },
    { name: "Mar 10", visitors: 900, connections: 400 },
    { name: "Mar 15", visitors: 1500, connections: 600 },
    { name: "Mar 20", visitors: 1100, connections: 450 },
    { name: "Mar 25", visitors: 1600, connections: 700 },
    { name: "Mar 30", visitors: 1800, connections: 750 },
  ],
};

const Overview = () => {
  const [selectedRange, setSelectedRange] = useState("30");

  const selectedData = data[selectedRange];

  // Get the max values
  const maxVisitors = Math.max(...selectedData.map((d) => d.visitors));
  const maxConnections = Math.max(...selectedData.map((d) => d.connections));

  // Calculate Growth %
  const visitorGrowth = ((maxVisitors - selectedData[0].visitors) / selectedData[0].visitors) * 100;
  const connectionGrowth = ((maxConnections - selectedData[0].connections) / selectedData[0].connections) * 100;

  return (
    <div className="bg-black ml-4 mb-4 border-[#1D1D1D] p-4 rounded-lg w-[344px] sm:w-[344px] md:w-[750px] md:h-[273px] sm:h-[400px] border-2 mr-2 sm:mr-0">
      {/* Filters */}
      <div className="flex justify-start space-x-3 text-white text-sm mb-2 flex-wrap">
        <select className="bg-black border border-gray-600 px-2 py-1 rounded-2xl">
          <option>Visitors</option>
        </select>
        <select className="bg-black border border-gray-600 px-2 py-1 rounded-2xl">
          <option>Last 30 days</option>
        </select>
        {/* Show "Connections" dropdown on larger screens */}
        <select className="hidden sm:block bg-black border border-gray-600 px-2 py-1 rounded-2xl">
          <option>Connections</option>
        </select>
        {/* Show "Add" button only in mobile view */}
        <button className="block sm:hidden px-3 py-1 rounded-2xl border border-dotted border-gray-500 text-gray-400 hover:text-white">
          + Add
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center text-white mb-2 flex-wrap">
        <h1 className="text-2xl sm:text-3xl font-bold">13.49K</h1>
        <span className="text-green-400 text-sm ml-2">
          +469% <span className="text-gray-400">(897)</span>
        </span>
        {/* Remove 3.49K parent in mobile view */}
        <div className="hidden md:flex items-center">
          <span className="text-lg font-bold ml-6">• 3.49K</span>
          <span className="text-green-400 text-sm ml-2">
            +180% <span className="text-gray-400">(497)</span>
          </span>
        </div>
      </div>

      {/* Chart */}
      <div className="w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={selectedData}>
            <XAxis dataKey="name" stroke="gray" tick={{ fill: "white", fontSize: 12 }} />
            <YAxis stroke="gray" tick={{ fill: "white", fontSize: 12 }} />
            <Tooltip contentStyle={{ background: "#1D1D1D", border: "none", color: "white" }} />

            {/* Visitors Line (White) */}
            <Line type="linear" dataKey="visitors" stroke="white" strokeWidth={1.5} dot={false} />

            {/* Connections Line (Purple) */}
            <Line type="linear" dataKey="connections" stroke="#a855f7" strokeWidth={1.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
