import React from "react";
import Styles from "./Styles.module.css";
const ShowPictures = ({
  image,
  index,
  indexBackGround,
  setIndexBackGround,
  setPicPicture,
  ...obj
}) => {
  // const handelColor=
  const handelPic = () => {
    setPicPicture(obj.images[index]);
    setIndexBackGround(index);
  };

  return (
    <img
      src={image}
      alt="phone"
      onClick={handelPic}
      className={
        index === indexBackGround && setPicPicture
          ? Styles.orangeBackGround
          : ""
      }
    />
  );
};

export default ShowPictures;
