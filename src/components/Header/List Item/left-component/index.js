import "./Style.css";
import Logo from "../../Logo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import CartContext from "../../../../CartContext/CartContext";
import { useContext } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const LeftHeader = ({ openMenue, SetOpenMenue }) => {
  const leftMenuItems = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  const handelopenMenue = () => {
    SetOpenMenue(!openMenue);
  };
  const cartShow1 = useContext(CartContext);
  const count = cartShow1.cart
    .map((item) => item.count)
    .reduce((c, s) => c + s, 0);
  return (
    <div className="left-div">
      <Logo logo="matter" />
      {leftMenuItems.map((item) => (
        <div className="list-items">
          <div>{item}</div>
          <span className="arrow">
            <KeyboardArrowDownIcon />
          </span>
        </div>
      ))}
      {openMenue && (
        <Badge badgeContent={count} color="primary">
          <Link className="cart-color" to={"/cart"}>
            <ShoppingBagIcon />
          </Link>
        </Badge>
      )}

      <div>
        <button class="burgar" onClick={handelopenMenue}>
          {openMenue ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default LeftHeader;
