import React from "react";
import "./Styles.css";
import Date from "../Date";
import Title from "../Title";
import Paragraph from "../Paragraph";
import Pic from "../Pic";
const ExploreBox = ({ date, title, paragraph, image ,index }) => {
  return (
    <div className="explore-box" style={{gridArea:`c${index+1}`}}>
      <Date date={date} />
      <Title title={title} />
      {!!paragraph && <Paragraph paragraph={paragraph} />}
      {!!image && <Pic image={image} index={index} />}
    </div>
  );
};

export default ExploreBox;
