import React from "react";
import "./Styles.css";
import Sub from "./Sub";
const Title = ({ title, subTitle }) => {
  return (
    <div className="title-subTitle">
      <h3>{title}</h3>
      {
        subTitle.map((item)=>(
            <Sub item={item}/>
        ))
      }
    </div>
  );
};

export default Title;
