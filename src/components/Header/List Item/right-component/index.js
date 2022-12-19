import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import CartContext from "../../../../CartContext/CartContext";
import { Link } from "react-router-dom";


const Right = () => {
  const cartIncrease = useContext(CartContext);
  const count = cartIncrease.cart
    .map((item) => item.count)
    .reduce((c, s) => c + s, 0);

  return (
    <div className="right-div">
      <div>LOGIN</div>
      <div>
        <SearchIcon />
      </div>
      <div>
        <FavoriteIcon />
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
