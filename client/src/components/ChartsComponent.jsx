import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Label,
} from "recharts";

const ChartsComponent = ({ data }) => {
  return (
    <div className="h-[400px]">
      <h1 className="font-semibold text-center py-10 text-blue-500 text-4xl">
        Year Data
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="id">
            <Label value="Year" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Count" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip
            isAnimationActive={true}
            animationEasing="ease-in-out"
            animationDuration={300}
            cursor={{ fill: "#252728" }}
            contentStyle={{
              background: "#fff",
              border: "1px solid #E3E5E7",
              borderRadius: "5px",
            }}
            itemStyle={{ color: "#000" }}
          />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartsComponent;
