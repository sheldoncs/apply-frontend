import React from "react";
import FormData from "../index";
const formdata = (props) => {
  return (
    <div>
      <FormData
        credentials={props.credentials}
        authorized={(authorize) => props.authorize(authorize)}
      ></FormData>
    </div>
  );
};

export default formdata;
