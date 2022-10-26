import React from "react";
import Styles from "./Styles.module.css";
const BoldWords = ({ title, orange }) => {
  return (
    <h3 className={orange === "orange" ? Styles.orangePrice : Styles.BoldDesc}>
      {title}
    </h3>
  );
};

export default BoldWords;
