import React from "react";
import { Link } from "react-router-dom";

const StockSingleCard = ({ stock }) => {
  return (
    <div className="p-4 my-4 border-4 border-black">
      <h2 className="text-xl">{stock.name}</h2>
      <p className="text-lg">{stock.price}</p>
      <p className="text-lg">{stock.marketCap}</p>
      <div className="flex">
        <Link to={`/stocks/edit/${stock._id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
          </button>
        </Link>
        <Link to={`/stocks/details/${stock._id}`}>
          <button className="bg-yellow-400 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded">
            Show
          </button>
        </Link>
        <Link to={`/stocks/delete/${stock._id}`}>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Delete
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StockSingleCard;
