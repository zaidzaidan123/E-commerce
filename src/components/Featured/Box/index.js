import React from "react";
import "./Styles.css";
import New from "../isNew";
import QuickView from "../button";
const Box = ({ image, description, price, isNew }) => {
  return (
    <div className="box">
      <div
        className="box-images"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <New show={isNew} />
        <QuickView button="Quick View" />
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Box;
