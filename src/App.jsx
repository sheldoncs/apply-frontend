import React from "react";
import logo from "./logo.svg";
import classes from "./App.module.css";

import Login from "./containers/login/login";
import { Route, Switch } from "react-router-dom";
import Users from "./components/authorizeUsers/AuthorizeUsers";

function App() {
  return (
    <div className={classes.Bgrnd}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
