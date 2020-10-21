import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./menuItem.module.css";

const menuItem = () => {
  return;
  <div>
    <li className={classes.menuItem}>
      <NavLink
        exact
        onClick={props.clicked}
        activeClassName={classes.active}
        to={props.link}
      >
        {props.children}
      </NavLink>
    </li>
  </div>;
};

export default menuItem;
