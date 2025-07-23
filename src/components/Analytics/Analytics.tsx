import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
} from "recharts";
import { useMemo } from "react";

interface AnalyticsProps {
  chart_i?: boolean;
  chart_ii?: boolean;
  chart_iii?: boolean;
  title?: string;
  value?: string | number;
  illustration?: string;
}

const Analytics = ({
  chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
}: AnalyticsProps) => {
  const barData = useMemo(
    () =>
      ["Sept", "Oct", "Nov", "Dec"].map((name) => ({
        name,
        Earnings: Math.floor(Math.random() * 5000),
        Followers: Math.floor(Math.random() * 10000),
      })),
    []
  );

  const lineData = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => ({
        name: `Day ${i + 1}`,
        uv: Math.floor(Math.random() * 5000),
        pv: Math.floor(Math.random() * 5000),
      })),
    []
  );

  const pieData1 = useMemo(
    () =>
      ["A", "B", "C", "D", "E", "F"].map((g) => ({
        name: `Group ${g}`,
        value: Math.floor(Math.random() * 500),
      })),
    []
  );

  const pieData2 = useMemo(
    () =>
      ["A", "B", "C", "D", "E", "F"].map((g) => ({
        name: `Group ${g}`,
        value: Math.floor(Math.random() * 3000 + 500),
      })),
    []
  );

  return (
    <div className="relative z-[1] flex flex-col justify-center items-center">
      {chart_i && (
        <>
          <header className="w-full flex justify-between font-bold mb-2">
            <span className="text-[#00464e]">Subscribers:</span>
            <span className="text-[#810551]">Earnings:</span>
          </header>

          <BarChart width={250} height={210} data={barData}>
            <CartesianGrid strokeDasharray="100 10" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Followers" fill="#00464e" />
            <Bar dataKey="Earnings" fill="#810551" />
          </BarChart>
        </>
      )}

      {chart_ii && (
        <LineChart
          width={260}
          height={220}
          data={lineData}
          margin={{ right: 10, top: 10 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#810551" />
          <Line type="monotone" dataKey="uv" stroke="#00464e" />
        </LineChart>
      )}

      {chart_iii && (
        <PieChart width={300} height={300}>
          <Pie
            data={pieData1}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#00464e"
          />
          <Pie
            data={pieData2}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={70}
            fill="#810551"
            label
          />
        </PieChart>
      )}

      {title && (
        <>
          <h1 className="text-[16px] font-medium text-center">{title}</h1>
          <h2 className="text-[18px] text-lime-500">{value}</h2>
          <h2 className="text-center text-gray-600">
            People are loving your content
            <br />
            🙌🎉🎆
          </h2>

          {illustration && (
            <img
              src={illustration}
              alt="illustration"
              className="h-[150px] mt-2"
            />
          )}
        </>
      )}
    </div>
  );
};

export default Analytics;
