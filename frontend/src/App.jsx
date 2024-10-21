import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stocks/create" element={<CreateBook />} />
      <Route path="/stocks/edit/:id" element={<EditBook />} />
      <Route path="stocks/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
