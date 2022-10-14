import React from "react";
import "./Styles.css"
const Pic = ({ image ,index }) => {
  return (
    <div
      className={ index===0 ? "pic1":"pic"}
      style={{
        backgroundImage: `url(${image})`,
      }}
    ></div>
  );
};

export default Pic;
