import React from "react";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let formatClasses = [classes.SideDrawer, classes.Close];

  if (props.show) {
    formatClasses = [classes.SideDrawer, classes.Open];
    console.log("show", props.show);
  }

  return (
    <div onClick={props.clicked} className={formatClasses.join(" ")}></div>
  );
};

export default sideDrawer;
