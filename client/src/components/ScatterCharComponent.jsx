import {
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Label,
} from "recharts";

const ScatterCharComponent = ({ data }) => {
  return (
    <div className="h-[400px] mt-40 pb-10">
      <h1 className="font-semibold text-center text-blue-500 text-4xl">
        Topic Data
      </h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="x">
            <Label
              value="Topics"
              offset={-4}
              stroke="black"
              position="insideBottom"
            />
          </XAxis>
          <YAxis dataKey="y">
            <Label
              value="Count"
              angle={-90}
              stroke="black"
              position="insideLeft"
            />
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
          <Bar dataKey={"y"} fill="black" radius={[7, 7, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterCharComponent;
