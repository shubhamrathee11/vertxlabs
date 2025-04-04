import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
  } from "recharts";
  
  const OverviewChart = ({ data }) => (
    <div className="w-full h-[180px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="gray" tick={{ fill: "white", fontSize: 12 }} />
          <YAxis stroke="gray" tick={{ fill: "white", fontSize: 12 }} />
          <Tooltip contentStyle={{ background: "#1D1D1D", border: "none", color: "white" }} />
          <Line type="linear" dataKey="visitors" stroke="white" strokeWidth={1.5} dot={false} />
          <Line type="linear" dataKey="connections" stroke="#a855f7" strokeWidth={1.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
  
  export default OverviewChart;
  