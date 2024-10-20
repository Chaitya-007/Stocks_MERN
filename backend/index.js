import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Stock } from "./models/stockModel.js";
import stocksRoute from "./routes/stockRoutes.js";
import cors from "cors";
dotenv.config({});

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODBURL;

const app = express();

// Add middleware
app.use(express.json());

// Default cors
// Allows all origins and headers
app.use(cors());
// Option 2
// Allows only specific origins
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  response.send("welcome");
});
// This will add /books to all routes as prefix
app.use("/stocks", stocksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error.message);
  });
