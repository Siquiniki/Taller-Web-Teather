import { Router } from "express";
import { addTheather } from "../controllers/teather.controller.js";

const router = Router();

router.post("/teather", addTheather);

export default router;