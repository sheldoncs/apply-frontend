import React from "react";
import classes from "./button.module.css";

// import Button from "./index";

const button = (props) => {
  let creds = null;
  let intializeValue = " ";
  let buttonClasses = [classes.Button];
  buttonClasses.push("btn");
  buttonClasses.push("btn-info");

  creds = (
    <button onClick={() => props.clicked} className={buttonClasses.join(" ")}>
      {props.children}
    </button>
  );

  return <div> {creds}</div>;
};

export default button;
