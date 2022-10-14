import React from "react";
import "./Styles.css";
const New = ({ show }) => {
  return <div className={"new-box " + (show === true ? "show" : "")}>New</div>;
};

export default New;
