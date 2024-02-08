import VisualData from "../models/VisualData.js";

export const getVisualData = async (req, res) => {
  try {
    const visualData = await VisualData.find();
    res.status(200).json(visualData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
