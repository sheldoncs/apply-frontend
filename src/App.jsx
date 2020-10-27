import React from "react";
import logo from "./logo.svg";
import classes from "./App.module.css";

import Login from "./containers/login/login";
import Apply from "./containers/apply/apply.jsx";
import { Route, Switch } from "react-router-dom";
// import Users from "./components/authorizeUsers/AuthorizeUsers";

function App() {
  return (
    <div className={classes.Bgrnd}>
      <Switch>
        <Route exact path="/register" component={Login} />
        <Route exact path="/apply" component={Apply} />
        <Route exact path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
