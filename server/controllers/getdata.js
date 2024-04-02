import VisualData from "../models/VisualData.js";
import CountryName from "i18n-iso-countries";

export const getVisualData = async (req, res) => {
  try {
    const visualData = await VisualData.find();
    res.status(200).json(visualData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getGeoData = async (req, res) => {
  try {
    const geoData = await VisualData.find();
    const mappedLocations = geoData.reduce((acc, curr) => {
      const countryISO = CountryName.getAlpha3Code(curr.country, "en");
      if (countryISO) {
        if (!acc[countryISO]) {
          acc[countryISO] = 0;
        }
        acc[countryISO] += 1;
      }
      return acc;
    }, {});

    const formattedLoactions = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLoactions);
  } catch (e) {
    res.status(404).json({ message: error.message });
  }
};

export const getSectorData = async (req, res) => {
  try {
    const sectorData = await VisualData.find();
    const mappedSectors = sectorData.reduce((acc, curr) => {
      if (curr.sector !== "") {
        if (!acc[curr.sector]) {
          acc[curr.sector] = 0;
        }
        acc[curr.sector] += 1;
      }
      return acc;
    }, {});

    const formattedSectors = Object.entries(mappedSectors).map(
      ([sector, count]) => {
        return { id: sector, name: sector, value: count };
      }
    );

    res.status(200).json(formattedSectors);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRegionData = async (req, res) => {
  try {
    const regionData = await VisualData.find();
    const mappedRegions = regionData.reduce((acc, curr) => {
      if (curr.region !== "") {
        if (!acc[curr.region]) {
          acc[curr.region] = 0;
        }
        acc[curr.region] += 1;
      }
      return acc;
    }, {});

    const formattedRegions = Object.entries(mappedRegions).map(
      ([region, count]) => {
        return { id: region, name: region, value: count };
      }
    );

    let sortedData = [...formattedRegions].sort((a, b) => {
      return b.value - a.value;
    });

    let slicedData = sortedData.slice(0, 8);

    res.status(200).json(slicedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTopicData = async (req, res) => {
  try {
    const topicData = await VisualData.find();
    const mappedTopics = topicData.reduce((acc, curr) => {
      if (curr.topic !== "") {
        if (!acc[curr.topic]) {
          acc[curr.topic] = 0;
        }
        acc[curr.topic] += 1;
      }
      return acc;
    }, {});

    const formattedTopics = Object.entries(mappedTopics).map(
      ([topic, count]) => {
        return { x: topic, y: count };
      }
    );

    let sortedData = [...formattedTopics].sort((a, b) => {
      return b.value - a.value;
    });

    let slicedData = sortedData.slice(0, 10);

    res.status(200).json(slicedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getYearData = async (req, res) => {
  try {
    const yearData = await VisualData.find();
    const mappedYears = yearData.reduce((acc, curr) => {
      if (curr.end_year !== "") {
        if (!acc[curr.end_year]) {
          acc[curr.end_year] = 0;
        }
        acc[curr.end_year] += 1;
      }
      return acc;
    }, {});

    const formattedYears = Object.entries(mappedYears)
      .map(([year, count]) => {
        return { id: year, value: count };
      })
      .filter((item) => item.id !== null && item.id !== "null");

    let sortedData = [...formattedYears].sort((a, b) => {
      return a.id - b.id;
    });

    res.status(200).json(sortedData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
