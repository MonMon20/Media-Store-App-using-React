import "./styles/App.css";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import defaultProducts from "./models/data.json";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState(defaultProducts);
  const [basketItems, setBasketItems] = useState([]);
  const [term, setTerm] = useState("");

  const addToBasket = (id) => {
    // get product object
    // store product pbject in basketItems
    // mark item as hidden in the products list

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.trackId === id) {
        setBasketItems([...basketItems, product]);
        product.hidden = true;
        break;
      }
    }
  };

  const removeFromBasket = (id) => {
    let newBasketItems = [];
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].trackId !== id) {
        newBasketItems.push(basketItems[i]);
      }
    }
    setBasketItems(newBasketItems);

    for (let i = 0; i < products.length; i++) {
      const product = products[i];
      if (product.trackId === id) {
        product.hidden = false;
        break;
      }
    }
  };

  const search = (value) => {
    fetch(`https://itunes.apple.com/search?term=${value}&limit=30&explicit=no`)
      .then((res) => res.json())
      .then(
        (result) => {
          setProducts(result.results);
        },
        (error) => {}
      );
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header itemCount={basketItems.length} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/basket">
            <Basket basket={basketItems} removeFromBasket={removeFromBasket} />
          </Route>
          <Route path="/">
            <Home
              products={products}
              addToBasket={addToBasket}
              search={search}
              term={term}
              setTerm={setTerm}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
