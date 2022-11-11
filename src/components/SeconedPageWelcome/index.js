import React from "react";
import Style from "./Style.module.css";
const SeconedWelcome = () => {
  return (
    <div className={Style.SeconedContianer}>
      <h1 className={Style.apparels}>Apparels</h1>
      <p className={Style.paragraph}>
        White Gold began gaining popularity in the early 1900’s as an
        alternative to platinum.{" "}
      </p>
      <img src="images/bce7a2a190a22802b2cf58aa91c42939b9bd5973.png" className={Style.SeconedImg}/>
    </div>
  );
};

export default SeconedWelcome;
