import React from "react";
import "./Style.css";

const QuickView = ({button}) => {
  return (
    <div className="lay-out">
      <button className="Quick-view">{button}</button>
    </div>
  );
};

export default QuickView;
