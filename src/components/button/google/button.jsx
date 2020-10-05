import React from "react";
import Button from "./index";

const button = (props) => {
  let creds = null;
  let intializeValue = " ";

  if (props.credentials != null) {
    creds = (
      <Button visible={props.visible} clicked={props.clicked(auth)}>
        {props.children}
      </Button>
    );
  }

  return <div> {creds}</div>;
};

export default button;
