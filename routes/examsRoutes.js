import express from "express";
import signup from "../controllers/auth/signupController.js";
import { login, me } from "../controllers/auth/loginController.js";
import { examsSets } from "../controllers/exams/examsController.js";

const router = express.Router();

router.post("/exams", examsSets);

router.post("/login",login)

router.get("/me" ,me )

export default router;