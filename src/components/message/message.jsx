import React from "react";
import classes from "./message.module.css";

const message = (props) => {
  return <div className={classes.Message}>{props.children}</div>;
};

export default message;
