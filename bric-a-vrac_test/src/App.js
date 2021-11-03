import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

