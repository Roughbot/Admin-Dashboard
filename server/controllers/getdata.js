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
