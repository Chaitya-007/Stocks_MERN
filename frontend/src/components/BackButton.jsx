import React from "react";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <Link to={destination}>
      <div className="bg-green-500 text-3xl text-white">BackButton</div>;
    </Link>
  );
};

export default BackButton;
