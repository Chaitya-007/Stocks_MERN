import express from "express";
import dotenv from "dotenv";
dotenv.config({});

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("Server is ready");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
