import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilterdProductsPage from "../../views/FilterdProductsPage";
import HomePage from "../../views/HomePage";
import PDP from "../../views/PDP";
import LayOut from "../Layut";
import CartContext from "../../CartContext/CartContext";
import Cart from "../../views/Cart";
const Router = () => {
  const [open,setOpen]=useState(false)
  const [counter, setCounter] = useState(1);
  const [cart, setCart] = useState([]);
  const handelAddToCart = (obj) => {
    let ifInclude = true;
    const newCart = cart.map((item) => {
      if (item.id === obj.id) {
        ifInclude = false;
        item.count=item.count+counter;
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
    <CartContext.Provider value={{ cart,setCart, handelAddToCart,counter,setCounter,open,setOpen }}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayOut />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<FilterdProductsPage />} />
            <Route path="/pdp/:id" element={<PDP />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default Router;
