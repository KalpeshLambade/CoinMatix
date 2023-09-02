import { healthCheck } from "../controller/userController";
import express from "express";

const router = express.Router();

router.get("/ping",healthCheck)

export default router;