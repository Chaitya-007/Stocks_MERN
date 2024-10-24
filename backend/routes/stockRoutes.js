import express from "express";
import { Stock } from "../models/stockModel.js";

const router = express.Router();

router.post("/", async (request, response) => {
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

router.get("/", async (request, response) => {
  try {
    const stocks = await Stock.find({});
    return response.status(200).json({
      count: stocks.length,
      data: stocks,
    });
  } catch (error) {
    console.log("Error getting stocks", error.message);
  }
});

router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const stock = await Stock.findById(id);
    return response.status(200).json(stock);
  } catch (error) {
    console.log("Error getting stocks", error.message);
  }
});

router.put("/:id", async (request, response) => {
  try {
    if (!request.body.name || !request.body.price || !request.body.marketCap) {
      return response.status(400).send("Missing required fields");
    }

    const { id } = request.params;

    const result = await Stock.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).send({ message: "Stock not found" });
    }

    return response
      .status(200)
      .send({ messagee: "Stock updated successfully" });
  } catch (error) {
    console.log({ message: "Error updating stock" });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Stock.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).send({ message: "Stock not found" });
    }

    return response
      .status(200)
      .send({ messagee: "Stock deleted successfully" });
  } catch (error) {
    console.log({ message: "Error updating stock" });
  }
});

export default router;
