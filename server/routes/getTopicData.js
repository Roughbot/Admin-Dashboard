import Express from "express";

import { getTopicData } from "../controllers/getdata.js";

const router = Express.Router();

router.get("/", getTopicData);

export default router;
