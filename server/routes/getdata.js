import express from "express";
import { getVisualData } from "../controllers/getdata.js";

const router = express.Router();

router.get("/", getVisualData);

export default router;
