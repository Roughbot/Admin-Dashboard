import express from "express";
import { getRegionData } from "../controllers/getdata.js";

const router = express.Router();

router.get("/", getRegionData);

export default router;
