import React from "react";
import { Link } from "react-router-dom";
import StockSingleCard from "./StockSingleCard";

const StockCard = ({ stocks }) => {
  return (
    <div>
      StockCard
      <div>
        {stocks.map((stock, index) => (
          <StockSingleCard key={index} stock={stock}></StockSingleCard>
        ))}
      </div>
    </div>
  );
};

export default StockCard;
