import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect((response) => {
    setLoading(true);
    axios
      .get("http://localhost:5555/stocks")
      .then((response) => {
        setBooks(response.data.data);
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
        <h1 className="text-3xl my-8">Stock List</h1>
        <Link to="/stocks/create">
          <h1 className="text-3xl">+</h1>
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        books.map((stock, index) => (
          <div key={index} className="p-4 my-4 border border-gray-300">
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
        ))
      )}
    </div>
  );
};

export default Home;
