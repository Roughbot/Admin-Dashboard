import Express from "express";
import { getYearData } from "../controllers/getdata.js";

const router = Express.Router();

router.get("/", getYearData);

export default router;
