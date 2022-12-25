import "./Style.css";
import Left from "./left-component";
import Right from "./right-component";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [openMenue, SetOpenMenue] = useState(false);
  const leftMenuItems = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  const history =useNavigate()
  const pdpHandler = () => {
    history("/products");
  };
  return (
    <>
      <div className="header-container">
        <Left openMenue={openMenue} SetOpenMenue={SetOpenMenue} />
        <Right />
      </div>
      <div>
        {openMenue
          ? leftMenuItems.map((item) => (
              <div className="burgarOpen">
                <div onClick={pdpHandler}>{item}</div>
                <span className="arrow">
                  <KeyboardArrowDownIcon />
                </span>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Header;
