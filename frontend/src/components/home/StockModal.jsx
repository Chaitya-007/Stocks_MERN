import React from "react";
import { Link } from "react-router-dom";

const StockModal = ({ stock, onClose }) => {
  return (
    <div onClick={onClose}>
      <h1>StockModal</h1>
      <div
        onClick={(event) => event.stopPropagation()}
        className="z-50 bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg shadow-lg"
      >
        <button className="bg-red-600 " onClick={onClose}>
          Close
        </button>
        <h1 className="text-3xl">{stock.name}</h1>
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
    </div>
  );
};

export default StockModal;
