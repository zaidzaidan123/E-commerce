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
import AuthContext from "../../../../CartContext/AuthContext";
import { useNavigate } from "react-router-dom";

const LeftHeader = ({ openMenue, SetOpenMenue }) => {
  const history = useNavigate();
  const authCtx = useContext(AuthContext);
  const leftMenuItems = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  const handelopenMenue = () => {
    SetOpenMenue(!openMenue);
  };
  const cartShow1 = useContext(CartContext);
  const count = cartShow1.cart
    .map((item) => item.count)
    .reduce((c, s) => c + s, 0);

  const logoutHandler = () => {
    authCtx.logout();
  };

  const homeHandler = () => {
    history("/");
  };

  const pdpHandler = () => {
    history("/products");
  };
  return (
    <div className="left-div">
      <div onClick={homeHandler} className="logo-change">
        <Logo logo="matter" />
      </div>

      {leftMenuItems.map((item) => (
        <div className="list-items">
          <div onClick={pdpHandler}>{item}</div>
          <span className="arrow">
            <KeyboardArrowDownIcon />
          </span>
        </div>
      ))}

      <div className="display-cart-res">
        {!authCtx.isLoggedIn && (
          <Link to={"/login"} className="cart-color log-res">
            LOGIN
          </Link>
        )}
        {authCtx.isLoggedIn && (
          <Link to={"/"} className="cart-color log-res" onClick={logoutHandler}>
            LOG OUT
          </Link>
        )}
        {openMenue && (
          <Badge badgeContent={count} color="primary">
            <Link className="cart-res" to={"/cart"}>
              <ShoppingBagIcon />
            </Link>
          </Badge>
        )}
        <button class="burgar" onClick={handelopenMenue}>
          {openMenue ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
      </div>
    </div>
  );
};

export default LeftHeader;
