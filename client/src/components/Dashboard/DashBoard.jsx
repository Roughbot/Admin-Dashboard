import { useGetSectorDataQuery } from "../../state/getDataApi";
import { ResponsivePie } from "@nivo/pie";

const DashBoard = () => {
  const { data } = useGetSectorDataQuery();
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
      </div>
    </div>
  );
};

export default DashBoard;
