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
