import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
// Context
import cartContext from "./contexts/CartContex";
import productContext from "./contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart:
    setCart(
      ...cart,
      cart.filter((product) => product.id !== item)
    );
    console.log(cart);
  };

  const removeItem = (item) => {
    setCart(
      ...cart,
      cart.filter((product) => product.id !== item)
    );
  };

  return (
    <productContext.Provider value={{ products, addItem }}>
      <cartContext.Provider value={{ cart, removeItem }}>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </div>
      </cartContext.Provider>
    </productContext.Provider>
  );
}

export default App;
