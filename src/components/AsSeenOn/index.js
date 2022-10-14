import React from "react";
import Logo from "../Header/Logo";
import "./Styles.css"
const AsSeen = () => {
  return (
    <div className="asSeen-containaer">
      <div>
        <Logo logo="As Seen On" />
      </div>
      <div className="As-seen-pic"></div>
    </div>
  );
};

export default AsSeen;
