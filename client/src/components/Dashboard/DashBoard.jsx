import { ResponsiveBar } from "@nivo/bar";
import { useGetSectorDataQuery } from "../../state/getDataApi";
import { ResponsivePie } from "@nivo/pie";
import { useGetRegionDataQuery } from "../../state/getDataApi";
import { useGetTopicDataQuery } from "../../state/getDataApi";
import { useGetYearDataQuery } from "../../state/getDataApi";
import ChartsComponent from "../ChartsComponent";
import ScatterCharComponent from "../ScatterCharComponent";

const DashBoard = () => {
  const { data } = useGetSectorDataQuery();
  const { data: regionData } = useGetRegionDataQuery();
  const { data: topicData } = useGetTopicDataQuery();
  const { data: yearData } = useGetYearDataQuery();

  console.log(topicData);
  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="py-6 font-semibold text-center text-sky-700 text-4xl">
            Main DashBoard
          </h1>
        </div>
        <div className="h-[500px]">
          <h1 className="font-semibold text-center text-blue-500 text-4xl">
            Sector Data
          </h1>
          <ResponsivePie
            data={data || []}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            colors={{ scheme: "paired" }}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            arcLinkLabelsSkipAngle={8}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsThickness={2}
            arcLabelsSkipAngle={8}
            arcLabelsTextColor={{
              from: "color",
              modifiers: [["darker", 2]],
            }}
          />
        </div>
        <div className="h-[400px] ">
          <h1 className="font-semibold text-center text-blue-500 text-4xl">
            Top 8 Regions
          </h1>
          <ResponsiveBar
            data={regionData || []}
            indexBy="name"
            margin={{ top: 50, right: 130, bottom: 50, left: 150 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            indexScale={{ type: "band", round: true }}
            colors={{ scheme: "nivo" }}
            borderColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Region",
              legendPosition: "middle",
              legendOffset: 32,
              truncateTickAt: 0,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Posts",
              legendPosition: "middle",
              legendOffset: -40,
              truncateTickAt: 0,
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
              from: "color",
              modifiers: [["darker", 1.6]],
            }}
          />
        </div>
        <div>
          <ChartsComponent data={yearData} />
        </div>
        <div>
          <ScatterCharComponent data={topicData} />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
