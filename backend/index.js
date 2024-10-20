import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Stock } from "./models/stockModel.js";
dotenv.config({});

const PORT = process.env.PORT || 5000;
const mongoDBURL = process.env.MONGODBURL;

const app = express();

app.get("/", (request, response) => {
  console.log(request);

  response.status(200).send("Server is ready");
});

app.post("/stocks", async (request, response) => {
  try {
    if (!request.body.name || !request.body.price || !request.body.marketCap) {
      return response.status(400).send("Missing required fields");
    }

    const newStock = {
      name: request.body.name,
      price: request.body.price,
      marketCap: request.body.marketCap,
    };

    const stock = await Stock.create(newStock);
    return response.status(201).send(stock);
  } catch (error) {
    console.log("Error creating stock", error.message);
  }
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
