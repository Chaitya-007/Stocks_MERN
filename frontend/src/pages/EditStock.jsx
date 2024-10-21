import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditStock = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [marketCap, setMarketCap] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/stocks/${id}`)
      .then((response) => {
        setName(response.data.name);
        setPrice(response.data.price);
        setMarketCap(response.data.marketCap);
        setLoading(false);
      })
      .catch(() => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  const handleEditStock = () => {
    setLoading(true);
    const obj = {
      name,
      price,
      marketCap,
    };
    axios
      .put(`http://localhost:5555/stocks/${id}`, obj)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <BackButton />
      <h1>Edit Stock</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border-2 border-gray-400 "
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="text"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="border-2 border-gray-400 "
        />
      </div>
      <div>
        <label>Market Cap</label>
        <input
          type="text"
          onChange={(e) => setMarketCap(e.target.value)}
          value={marketCap}
          className="border-2 border-gray-400 "
        />
      </div>
      <button className="bg-yellow-600" onClick={handleEditStock}>
        Save
      </button>
    </div>
  );
};

export default EditStock;
