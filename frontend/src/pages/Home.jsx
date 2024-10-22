import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import StockCard from "../components/home/StockCard";
import StockTable from "../components/home/StockTable";

const Home = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("table");

  useEffect((response) => {
    setLoading(true);
    axios
      .get("http://localhost:5555/stocks")
      .then((response) => {
        setStocks(response.data.data);
        console.log(response);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={() => setView("table")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Table
          </button>
          <button
            onClick={() => setView("card")}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Card
          </button>
        </div>
        <h1 className="text-3xl my-8">Stock List</h1>
        <Link to="/stocks/create">
          <h1 className="text-3xl">+</h1>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : view === "table" ? (
        <StockTable stocks={stocks}></StockTable>
      ) : (
        <StockCard stocks={stocks}></StockCard>
      )}
    </div>
  );
};

export default Home;
