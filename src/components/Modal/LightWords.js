import React from "react";
import Styles from "./Styles.module.css";

const LightWords = ({ title }) => {
  return <p className={Styles.lightWords}>{title}</p>;
};

export default LightWords;
