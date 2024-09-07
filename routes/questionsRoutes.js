import express from "express";

import { isAuthenticated } from "../middlewares/auth.js";
import { addCloudServiceProviders, addCloudServiceProvidersSections, addCloudServiceProvidersSectionsTopics, addExams, addQuestions, examsQuestions, getCloudServiceProviders, getCloudServiceProvidersSections, getCloudServiceProvidersSectionsTopics, getLevels, getQuestions } from "../controllers/questions/questionsController.js";
// import { sendOTP, verifyOTP } from "../controllers/auth/otpController";

const router = express.Router();


router.get('/questions',examsQuestions)



// ---------------------------------------- Clouds  ------------------------------------------//
// router.post("/clouds", addCloudServiceProviders);
// router.get("/clouds", getCloudServiceProviders);


// router.post("/clouds-sections", addCloudServiceProvidersSections);
// router.get("/clouds-sections/:id", getCloudServiceProvidersSections);


// router.post("/clouds-sections-topics", addCloudServiceProvidersSectionsTopics);
// router.get("/clouds-sections-topics/:id", getCloudServiceProvidersSectionsTopics);

// router.post("/add-questions", addQuestions);
// router.post("/add-exams", addExams);

// router.get("/questions",getQuestions)
// router.get("/levels/:id",getLevels)




export default router;