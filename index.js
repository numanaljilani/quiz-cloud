import express from "express";
const app = express();

import cors from "cors";
import path from "path";
import { dirname } from "path";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import examsRoutes from "./routes/examsRoutes.js";
import questionsRoutes from "./routes/questionsRoutes.js";
import { connectDB } from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import QuestionsSet from "./models/questionSetsModel.js";
import Question from "./models/questionsModel.js";
import { questions } from "./questions.js";

app.use(express.json());
app.use(cors());
dotenv.config();
console.log(process.env.DATABASE_URL);

connectDB();

// The express.urlencoded() middleware is used to parse and extract this URL-encoded data from the request body and make it available in the req.body object for further processing in your application
app.use(express.urlencoded({ extended: true }));

// Define the path to the static HTML file
const publicPath = path.join(dirname("public"), "public");
// Serve static files from the 'public' directory
app.use(express.static(publicPath));
// Set up the default route to serve the HTML file

app.get("/test", (req, res) => {
  res.send("Working");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"), (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res
        .status(500)
        .send({ message: "Internal server error custome error send" });
    }
  });
});
app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(publicPath, "privacy.html"), (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send({ message: "Internal server error" });
    }
  });
});

// const createTest = async () =>{
//   const newTest = await new  QuestionsSet({
//     duration : 180,
//     num_questions : 65,
//     set_number : 1,
//     exam_name : "SAA-C03",
//     total_marks : 1000,
//   });

//   await newTest.save();
//   console.log(newTest , "new Set")
// }

// createTest()

// const createQuestions = async () => {
//   for(let q in questions){
//     console.log(questions[q])
//       const question = await new Question({
//     question: questions[q].question,
//     options: questions[q].options,
//     correct_answer: questions[q].correct_answer,
//     topics: questions[q].topics,
//     exams: questions[q].exams,
//     weightage: questions[q].weightage,
//     service: questions[q].service,
//     examset: "66db090c18105afdd422e615",
//     index: questions[q].index,
//     multiselect: questions[q].multiselect,
//   });
//   await question.save();
//   console.log(question)
//   }


//   // await question.save();
//   // console.log(question)
// };
// createQuestions()
app.use("/api/auth", authRoutes);
app.use("/api/question", questionsRoutes);
app.use("/api/exams", examsRoutes);

global.appRoot = path.resolve(path.resolve());

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
