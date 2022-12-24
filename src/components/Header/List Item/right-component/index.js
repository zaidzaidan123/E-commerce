import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import CartContext from "../../../../CartContext/CartContext";
import { Link } from "react-router-dom";
import AuthContext from "../../../../CartContext/AuthContext";

const Right = () => {
  const authCtx = useContext(AuthContext);
  const cartIncrease = useContext(CartContext);
  const count = cartIncrease.cart
    .map((item) => item.count)
    .reduce((c, s) => c + s, 0);

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <div className="right-div">
      {!authCtx.isLoggedIn && (
        <Link to={"/login"} className="cart-color">
          LOGIN
        </Link>
      )}
      {authCtx.isLoggedIn && (
        <Link to={"/"} className="cart-color" onClick={logoutHandler}>
          LOG OUT
        </Link>
      )}

      <div>
        <SearchIcon />
      </div>
      <div>
        <FavoriteIcon className="cart-color" />
      </div>
      <div>
        <Badge badgeContent={count} color="primary">
          <Link className="cart-color" to={"/cart"}>
            <ShoppingBagIcon />
          </Link>
        </Badge>
      </div>
    </div>
  );
};

export default Right;
