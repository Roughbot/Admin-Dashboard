import Express from "express";
import { getCustomerData } from "../controllers/getCustomerData.js";

const router = Express.Router();

router.get("/", getCustomerData);

export default router;
