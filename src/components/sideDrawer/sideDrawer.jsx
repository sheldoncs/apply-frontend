import React from "react";
import classes from "./SideDrawer.module.css";

const sideDrawer = (props) => {
  let formatClasses = [classes.SideDrawer, classes.Close];

  if (props.openDrawer) {
    if (props.showError == false) {
      formatClasses = [classes.SideDrawer, classes.Open];
    }
  }

  return (
    <div onClick={props.clicked} className={formatClasses.join(" ")}></div>
  );
};

export default sideDrawer;
