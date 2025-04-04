const InsightStat = ({ label, value }) => (
    <div className="flex items-center w-[138px] h-[66px] sm:w-32 sm:h-16 mr-8">
      <div>
        <p className="text-sm text-gray-400 text-[16px]">{label}</p>
        <h2 className="text-2xl font-bold text-[32px]">{value}</h2>
      </div>
      <div className="mt-6">
        <p className="text-green-400 text-sm ml-5 text-[12px]">+0.00%</p>
        <p className="text-gray-400 text-sm ml-5 text-[12px]">(000)</p>
      </div>
    </div>
  );
  
  export default InsightStat;
  