import React from "react";
import classes from "./FileInput.module.css";

const fileInput = (props) => {
  let targetClasses = [classes.FileInput];
  targetClasses.push("btn-dark");

  return (
    <div style={{ marginLeft: "27px" }}>
      <div className={targetClasses.join(" ")} onClick={props.clicked}>
        <div className="text-center pt-2 text-uppercase ">{props.children}</div>
      </div>
      <input
        style={{ display: "none" }}
        type="file"
        id="upload-button"
        name="selectedFile"
        onChange={props.change}
      />
    </div>
  );
};

export default fileInput;
