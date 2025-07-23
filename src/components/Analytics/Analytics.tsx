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

    interface AnalyticsProps {
  chart_i?: boolean;
  chart_ii?: boolean;
  chart_iii?: boolean;
  title?: string;
  value?: string | number;
  illustration?: string;
  barData?: BarDataItem[];
  lineData?: LineDataItem[];
  pieData1?: PieDataItem[];
  pieData2?: PieDataItem[];
}


    interface BarDataItem {
    name: string;
    Earnings: number;
    Followers: number;
    }

    interface LineDataItem {
    name?: string;
    uv: number;
    pv: number;
    }

    interface PieDataItem {
    name: string;
    value: number;
    }

    const Analytics = ({
      chart_i,
  chart_ii,
  chart_iii,
  title,
  value,
  illustration,
  barData,
  lineData,
  pieData1,
  pieData2,
    }: AnalyticsProps) => {
    const data: BarDataItem[] = [
        { name: "Sept", Earnings: 4000, Followers: 2400 },
        { name: "Oct", Earnings: 3000, Followers: 1398 },
        { name: "Nov", Earnings: 2000, Followers: 9800 },
        { name: "Dec", Earnings: 2780, Followers: 3908 },
    ];

    const data02: LineDataItem[] = [
        { uv: 4000, pv: 2400 },
        { uv: 3000, pv: 1398 },
        { uv: 2000, pv: 4000 },
        { uv: 2780, pv: 3908 },
        { uv: 1890, pv: 2000 },
    ];

    const data03: PieDataItem[] = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
        { name: "Group E", value: 278 },
        { name: "Group F", value: 189 },
    ];

    const data04: PieDataItem[] = [
        { name: "Group A", value: 2000 },
        { name: "Group B", value: 3567 },
        { name: "Group C", value: 598 },
        { name: "Group D", value: 2000 },
        { name: "Group E", value: 1000 },
        { name: "Group F", value: 2500 },
    ];

    return (
        <div className="relative z-[1] flex flex-col justify-center items-center">
        {chart_i && (
            <>
            <header className="w-full flex justify-between font-bold mb-2">
                <span className="text-[#00464e]">Subscribers:</span>
                <span className="text-[#810551]">Earnings:</span>
            </header>

            <BarChart width={250} height={210} data={data}>
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
            data={data02}
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
                data={data03}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#00464e"
            />
            <Pie
                data={data04}
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
