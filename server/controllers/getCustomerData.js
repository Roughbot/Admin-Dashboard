import Users from "../models/Users.js";

export const getCustomerData = async (req, res) => {
  try {
    const CustomerData = await Users.find({ role: "user" }).select("-password");
    res.status(200).json(CustomerData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
