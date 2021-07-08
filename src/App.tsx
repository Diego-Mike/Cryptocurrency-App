import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import MarketRanking from "./Website/MarketRanking/MarketRanking";
import Home from "./Website/Home/Home";
import SingleCryptoCurrency from "./Website/SingleCryptoCurrency/SingleCryptoCurrency";
import Error from "./Website/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ranking" component={MarketRanking} />
        <Route
          exact
          path="/single/crypto/currency"
          component={SingleCryptoCurrency}
        />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
