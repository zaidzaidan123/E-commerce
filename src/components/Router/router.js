import React, { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterdProductsPage from "../../views/FilterdProductsPage";
import HomePage from "../../views/HomePage";
import PDP from "../../views/PDP";
import LayOut from "../Layut";
import CartContext from "../../CartContext/CartContext";
import Cart from "../../views/Cart";
import LogSign from "../../views/LogSign";
import AuthContext from "../../CartContext/AuthContext";
const Router = () => {
  const authCtx = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([]);
  const handelAddToCart = (obj) => {
    let ifInclude = true;
    const newCart = cart.map((item) => {
      if (item.id === obj.id) {
        ifInclude = false;
        item.count = item.count + counter;
        return item;
      } else {
        return item;
      }
    });
    setCart(newCart);
    if (ifInclude) {
      setCart([...newCart, { ...obj, count: counter }]);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handelAddToCart,
        counter,
        setCounter,
        open,
        setOpen,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<FilterdProductsPage />} />
            <Route path="/pdp/:id" element={<PDP />} />
            <Route path="/cart" element={<Cart />} />
            {!authCtx.isLoggedIn && (
              <Route path="/login" element={<LogSign />} />
            )}
          </Route>
          <Route
            path="*"
            element={
              <div style={{ height: "100vh", overflow: "hidden" }}>
                <iframe
                  src="https://embed.lottiefiles.com/animation/42479"
                  height="100%"
                  width="100%"
                  title="Error"
                ></iframe>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Router;
