import React, { useContext } from "react";
import Styles from "../components/CartCss/Style.module.css";
import Logo from "../components/Header/Logo";
import CartContext from "../CartContext/CartContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const cartShow = useContext(CartContext);
  const handelDeleteCart = (id) => {
    const result = window.confirm("Want to delete?");
    if (result) {
      const CopyArray = cartShow.cart.filter((item) => {
        return item.id !== id;
      });
      cartShow.setCart(CopyArray);
    }
  };
  return (
    <>
      <div>
        <Logo logo="Cart" />
      </div>
      <div className={Styles.BoxPadding}>
        {cartShow.cart?.map((item) => {
          return (
            <Card sx={{ width: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.images[0]}
                sx={{ padding: "1em 0", objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity = {item.count}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={(e) => handelDeleteCart(item.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
        {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={cartShow.cart[0].images[0]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {cartShow.cart[0].title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amount = {cartShow.cart[0].count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card> */}
      </div>
    </>
  );
};

export default Cart;
