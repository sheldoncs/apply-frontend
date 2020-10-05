import React from "react";
import Button from "./index";

const button = (props) => {
  let creds = null;
  let intializeValue = " ";
  // console.log("credentials " + props.credentials);
  if (props.credentials != null) {
    creds = (
      <Button
        clicked={(authorize) => props.clicked(authorize)}
        disabled={props.disabled}
        credentials={props.credentials}
      >
        {props.children}
      </Button>
    );
  } else {
    creds = (
      <div>
        <Button
          user={intializeValue}
          pwd={intializeValue}
          disabled={props.disabled}
        >
          {props.children}
        </Button>
      </div>
    );
  }

  return <div> {creds}</div>;
};

export default button;
