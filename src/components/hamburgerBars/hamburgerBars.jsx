import React from "react";
import HamburgerBar from "./hamburgerBar/HamburgerBar";
import classes from "./HamburgerBars.module.css";

const hamburgerBars = (props) => {
  let formatClasses = [classes.HamburgerBars];
  formatClasses.push("ml-1");
  formatClasses.push("pt-4");

  return (
    <div onClick={props.clicked} className={formatClasses.join(" ")}>
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </div>
  );
};

export default hamburgerBars;
