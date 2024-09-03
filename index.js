import express from "express";
const app = express();

import cors from "cors";
import path from "path";
import { dirname } from "path";
import dotenv from 'dotenv'


import authRoutes from './routes/authRoutes.js'
import {connectDB} from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";

app.use(express.json());
app.use(cors());
dotenv.config();
console.log(process.env.DATABASE_URL)


connectDB()

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

app.get('/', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'), (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send({ message: 'Internal server error custome error send' });
    }
  });
});
// app.get('/privacy-policy', (req, res) => {
//   res.sendFile(path.join(publicPath, 'privacy.html'), (err) => {
//     if (err) {
//       console.error('Error sending file:', err);
//       res.status(500).send({ message: 'Internal server error' });
//     }
//   });
// });

app.use("/api/auth", authRoutes);
// app.use("/api/question", questionsRoutes);

global.appRoot= path.resolve(path.resolve());

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
