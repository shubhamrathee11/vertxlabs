import DropdownSelector from "./Insights components/DropdownSelector";
import InsightStat from "./Insights components/InsightStat";
import ViewDetailsButton from "./Insights components/ViewDetailsButton";

const Insights = () => {
  return (
    <div className="bg-black text-white rounded-lg ml-3 p-4 max-md:ml-4 shadow-lg md:w-1/3 border-2 border-[#1D1D1D] h-[200px] md:h-[274px] w-[344px]">
      <div className="flex justify-between">
        <h3 className="text-lg flex font-semibold mb-2 text-[20px]">Insights</h3>
        <div className="relative flex justify-end">
          <DropdownSelector />
        </div>
      </div>

      <div className="flex flex-row sm:flex-col">
        <InsightStat label="Founders" value="7.4K" />
        <InsightStat label="Investors" value="6.09K" />
      </div>

      <ViewDetailsButton />
    </div>
  );
};

export default Insights;
