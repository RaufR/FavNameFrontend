import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import React from "react";
const data = [
  { name: "Page A", uv: 4000, pv: 1000, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1000, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 1000, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 1000, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 1000, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 1000, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 1010, amt: 2100 }
];

const ChartComponent = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default ChartComponent;
