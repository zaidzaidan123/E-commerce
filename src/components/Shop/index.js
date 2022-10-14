import React from "react";
import Logo from "../Header/Logo";
import "./Styles.css";
import BoxShop from "./BoxShop";
const Shop = () => {
  const arrayData = [
    {
      image: "images/c3d74b651e3f521439ae7e68750fa01c13171c98.png",
      title: "Pants",
    },
    {
      image: "images/ac22cf3d613f85df2f2d5fbe238567718c47fa96.png",
      title: "Tops",
    },
    {
      image: "images/ee642707bfa9abb265f97fb49aeca2886b3db030.png",
      title: "Tops",
    },
    {
      image: "images/2362345cd93c41ef9634d80b90866ae9394758d9.png",
      title: "Accessories",
    },
  ];
  return (
    <div className="container-shop">
      <div className="topic">
        <Logo logo="Shop" />
      </div>
      <div className="image-shop-boxes">
        {arrayData.map((item) => (
          <BoxShop {...item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
