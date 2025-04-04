import { useState } from "react";
import OverviewFilters from "./Overview components/OverviewFilters";
import OverviewStats from "./Overview components/OverviewStats";
import OverviewChart from "./Overview components/OverviewChart";

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
  const [selectedRange] = useState("30");
  const selectedData = data[selectedRange];

  return (
    <div className="bg-black ml-4 mb-4 border-[#1D1D1D] p-4 rounded-lg w-[344px] md:w-[750px] md:h-[273px] sm:h-[400px] border-2">
      <OverviewFilters />
      <OverviewStats />
      <OverviewChart data={selectedData} />
    </div>
  );
};

export default Overview;
