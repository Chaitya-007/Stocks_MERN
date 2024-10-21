import React from "react";
import BackButton from "../components/BackButton";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const ShowStock = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/stocks/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <BackButton />
      <h1 className="text-3xl my-8">Stock Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="p-4 my-4 border border-gray-300">
          <h2 className="text-xl">{book.name}</h2>
          <p className="text-lg">{book.price}</p>
          <p className="text-lg">{book.marketCap}</p>
        </div>
      )}
    </div>
  );
};

export default ShowStock;
