import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./navigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem clicked={() => props.clicked("register")} link="/">
        REGISTER
      </NavigationItem>
      <NavigationItem
        clicked={() => props.clicked("login")}
        options="login"
        link="/login"
      >
        LOG IN
      </NavigationItem>
    </div>
  );
};

export default navigationItems;
