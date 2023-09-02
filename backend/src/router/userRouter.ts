
import { register } from "../controller/userController";
import express from "express";
import { checkRegister } from "../middelweare/userMiddelweare";

const router = express.Router();

router.post("/register",checkRegister,register);

export default router;