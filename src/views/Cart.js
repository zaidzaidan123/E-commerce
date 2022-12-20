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
  console.log(cartShow.cart);
  const handelDeleteCart = (id) => {
    const result = window.confirm("Want to delete?");
    if (result) {
      const CopyArray = cartShow.cart.filter((item) => {
        return item.id !== id;
      });
      cartShow.setCart(CopyArray);
    }
  };

  const handedDecreaseCounter = (id) => {
    const clickedItem = cartShow.cart.find((item) => item.id === id);
    let checkValue = false;
    const newItem = {
      ...clickedItem,
      count: clickedItem.count - 1,
    };

    const newCart = cartShow.cart.map((item) => {
      if (item.id === id) {
        if (item.count > 1) {
          checkValue = false;
          return newItem;
        } else {
          checkValue = true;
        }
      }
      return item;
    });
    if(checkValue){
      cartShow.setCart(newCart);
      handelDeleteCart(id);
    }
    else{
      cartShow.setCart(newCart);
    }

    
  };
  const handedIncreaseCounter = (id) => {
    const clickedItem = cartShow.cart.find((item) => item.id === id);
    const newItem = {
      ...clickedItem,
      count: clickedItem.count + 1,
    };
    const newCart = cartShow.cart.map((item) => {
      if (item.id === id) {
        return newItem;
      }
      return item;
    });
    cartShow.setCart(newCart);
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
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ margin: "0 1em 0.5em 0" }}
                >
                  Quantity = {item.count}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Total Price = ${item.count * item.price}
                </Typography>
                <Button
                  className={Styles.buttonChecker + " " + Styles.counter}
                  onClick={() => {
                    handedDecreaseCounter(item.id);
                  }}
                  variant="contained"
                  sx={{ margin: "1em 1em 0 0" }}
                >
                  -
                </Button>

                <Button
                  className={Styles.buttonChecker + " " + Styles.counter}
                  onClick={() => {
                    handedIncreaseCounter(item.id);
                  }}
                  variant="contained"
                  sx={{ margin: "1em 1em 0 0" }}
                >
                  +
                </Button>
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
