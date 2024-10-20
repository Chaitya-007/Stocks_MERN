import mongoose from "mongoose";

const stockSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    marketCap: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Stock = mongoose.model("StockInfo", stockSchema);
