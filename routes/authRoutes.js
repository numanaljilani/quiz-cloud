import express from "express";
import signup from "../controllers/auth/signupController.js";
import { login, me } from "../controllers/auth/loginController.js";

const router = express.Router();

router.post("/register", signup);

router.post("/login",login)

router.get("/me" ,me )

export default router;