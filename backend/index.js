import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({});

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODB_URL;

const app = express();

app.get("/", (request, response) => {
  console.log(request);

  response.status(200).send("Server is ready");
});

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
