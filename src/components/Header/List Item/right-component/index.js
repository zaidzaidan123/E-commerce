import "./Style.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Right = () => {
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
        <ShoppingBagIcon />
      </div>
    </div>
  );
};

export default Right;
