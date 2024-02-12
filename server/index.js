import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import getdata from "./routes/getdata.js";
import getUser from "./routes/userdata.js";

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
app.use("/getData", getdata);
app.use("/getUser", getUser);

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
