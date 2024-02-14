import Express from "express";
import { getGeoData } from "../controllers/getdata.js";

const router = Express.Router();

router.get("/", getGeoData);

export default router;
