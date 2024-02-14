import { useEffect, useRef } from "react";
import { useGetGeoDataQuery } from "../../state/getDataApi";
import * as d3 from "d3";
import * as topojson from "topojson";

const Geography = () => {
  const { data } = useGetGeoDataQuery();
  const ref = useRef();

  useEffect(() => {
    d3.json("https://d3js.org/world-110m.v1.json").then((world) => {
      if (data) {
        // Count the number of posts per country
        var counts = d3.rollup(
          data,
          (v) => v.length,
          (d) => d.country
        );

        // Create a projection and a path generator
        var projection = d3.geoNaturalEarth1();
        var path = d3.geoPath().projection(projection);

        // Draw the map
        var svg = d3.select(ref.current);
        svg
          .selectAll("path")
          .data(topojson.feature(world, world.objects.countries).features)
          .enter()
          .append("path")
          .attr("d", path);

        // Add circles for each country
        svg
          .selectAll("circle")
          .data(Array.from(counts), (d) => d[0])
          .enter()
          .append("circle")
          .attr(
            "transform",
            (d) =>
              `translate(${projection(
                d3.geoCentroid(
                  topojson
                    .feature(world, world.objects.countries)
                    .features.find((f) => f.properties.name === d[0])
                )
              )})`
          )
          .attr("r", (d) => Math.sqrt(d[1]) + "px");
      }
    });
  }, [data]);

  return (
    <div className="flex flex-col bg-zinc-200 w-full h-full">
      <div className="mb-5 mt-3">
        <h2 className="font-semibold text-blue-500 text-4xl ml-3 ">
          Geography
        </h2>
        <p className="text-blue-500 ml-3 font-mono text-sm">
          Number of posts from different countries
        </p>
      </div>
      <svg ref={ref}></svg>
    </div>
  );
};

export default Geography;
