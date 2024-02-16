import Express from "express";
import { getSectorData } from "../controllers/getdata.js";

const router = Express.Router();

router.get("/", getSectorData);

export default router;
