import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import getdata from "./routes/getdata.js";
import getUser from "./routes/userdata.js";
import getGeoData from "./routes/getGeoData.js";
import getCustomerData from "./routes/getCustomerData.js";
import getSectorData from "./routes/getSectorData.js";
import getRegionData from "./routes/getRegionData.js";
import getTopicData from "./routes/getTopicData.js";
import getYearData from "./routes/getYearData.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use("/getdata", getdata);
app.use("/getuser", getUser);
app.use("/getgeodata", getGeoData);
app.use("/getcustomerdata", getCustomerData);
app.use("/getsectordata", getSectorData);
app.use("/getregiondata", getRegionData);
app.use("/gettopicdata", getTopicData);
app.use("/getyeardata", getYearData);
// Connect to MongoDB
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server Port: ${PORT}`);
      console.log("Connected to MongoDB");
    });
  })
  .catch((err) => console.log(err));

// Seed User Data
// import User from "./models/Users.js";
// import { dataUser } from "./data/index.js";

// const seedData = async () => {
//   try {
//     await User.insertMany(dataUser);
//     console.log("Data imported successfully");
//   } catch (error) {
//     console.error("Error importing data");
//   }
// };

// seedData();

// Seed graph Data
// import fs from "fs";
// import path from "path";
// import util from "util";
// import VisualData from "./models/VisualData.js";

// const readFile = util.promisify(fs.readFile);

// const seedData = async () => {
//   const dataPath = path.resolve("./data/jsondata.json");
//   const visualData = JSON.parse(await readFile(dataPath, "utf8"));

//   try {
//     await VisualData.deleteMany({});
//     await VisualData.insertMany(visualData);
//     console.log("Data imported successfully");
//   } catch (error) {
//     console.error("Error importing data");
//   }
// };

// seedData();
