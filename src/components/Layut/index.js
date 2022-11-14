import React from "react";
import { Outlet } from "react-router-dom";
import AddBar from "../AddsBar";
import Footer from "../Footer";
import Header from "../Header/List Item";

const LayOut = () => {
  return (
    <>
      <AddBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;
