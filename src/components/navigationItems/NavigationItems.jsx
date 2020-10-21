import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./navigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem
        clicked={() => props.clicked("login")}
        options="login"
        link="/"
      >
        LOG IN
      </NavigationItem>
      <NavigationItem
        clicked={() => props.clicked("register")}
        link="/register"
      >
        REGISTER
      </NavigationItem>
    </div>
  );
};

export default navigationItems;
