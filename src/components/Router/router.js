import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterdProductsPage from "../../views/FilterdProductsPage";
import HomePage from "../../views/HomePage";
import LayOut from "../Layut";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<FilterdProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
