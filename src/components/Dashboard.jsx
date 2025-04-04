import React from "react";
import DashboardHeader from "./Dashboard components/DashboardHeader";
import DashboardNav from "./Dashboard components/DashboardNav";
import Insights from "./Insights";
import Overview from "./Overview";
import Demographics from "./Demographics";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1 h-screen bg-black text-white relative md:ml-[240px]">
      <DashboardHeader />
      <DashboardNav />

      {/* Dashboard Content */}
      <div className="w-full mx-auto max-w-[1200px] md:px-6">
        <h3 className="text-[28px] font-semibold hidden lg:block ml-4.5">Overview</h3>

        <div className="flex flex-col md:flex-row md:space-x-0 mt-3 w-full">
          <Overview />
          <Insights />
        </div>

        <div className="w-full">
          <Demographics />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
