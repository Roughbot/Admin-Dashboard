import { useGetGeoDataQuery } from "../../state/getDataApi";
import { geoMapData } from "../../state/geodata";
import { ResponsiveChoropleth } from "@nivo/geo";
import { Box } from "@mui/material";

const Geography = () => {
  const { data } = useGetGeoDataQuery();
  return (
    <div className="grid grid-cols-1 mx-16 my-2">
      <Box mt="1rem 2.5rem">
        <h1 className="font-semibold text-blue-500 text-4xl">Geography</h1>
        <p className="text-blue-500 font-mono text-sm">
          Find where the most posts are comming form
        </p>
        <Box mt="30px" height="75vh" border="4px solid #000" borderRadius="4px">
          {data ? (
            <ResponsiveChoropleth
              data={data}
              theme={{
                axis: {
                  domain: {
                    line: {
                      stroke: "#777777",
                    },
                  },
                  legend: {
                    text: {
                      fill: "#777777",
                    },
                  },
                  ticks: {
                    linke: {
                      stroke: "#777777",
                      strokeWidth: 1,
                    },
                    fill: "#777777",
                  },
                },
                legends: {
                  text: {
                    fill: "#777777",
                  },
                },
                tooltop: {
                  container: {
                    background: "#333333",
                  },
                },
              }}
              features={geoMapData.features}
              margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
              domain={[0, 150]}
              unknownColor="#666666"
              label="properties.name"
              valueFormat=".2s"
              projectionScale={150}
              projectionTranslation={[0.45, 0.6]}
              projectionRotation={[0, 0, 0]}
              borderWidth={0.3}
              borderColor="#000000"
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 0,
                  translateY: -100,
                  itemsSpacing: 0,
                  itemWidth: 64,
                  itemHeight: 18,
                  itemDirection: "left-to-right",
                  itemTextColor: "#444444",
                  itemOpacity: 0.85,
                  symbolSize: 18,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#333333",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          ) : (
            <p>Loading...</p>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default Geography;
