import React from "react";
import "./Styles.css";
import Logo from "../Header/Logo";
import VideoBox from "./vedioBox";
const VediosBoxes = () => {
  const dataArray = [
    {
      image: "images/635c0a53670aa9b611314996afb28e7cbfb6a4ec.png",
      title: "Jamdani",
    },
    {
      image: "images/2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png",
      title: "Lorem ipsum dolor sit amet",
    },
    {
      image: "images/2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png",
      title: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="vedio-contianer">
      <div>
        <Logo logo="Recommended Videos" />
      </div>
      <div className="vedios-boxes">
        {dataArray.map((item) => (
          <VideoBox {...item} />
        ))}
      </div>
      <div className="vedio-button">
        <button>Show More</button>
      </div>
    </div>
  );
};

export default VediosBoxes;
