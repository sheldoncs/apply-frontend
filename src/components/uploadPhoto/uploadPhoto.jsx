import React from "react";
import defaultPhoto from "../../assets/greyuser.png";
import classes from "./UploadPhoto.module.css";

const uploadPhoto = (props) => {
  let formatClasses = [classes.UploadPhoto];
  formatClasses.push("d-block");
  let image =
    props.photo === null ? (
      <img src={defaultPhoto}></img>
    ) : (
      <img className={classes.shapePhoto} src={props.photo}></img>
    );

  return (
    <div className={classes.PhotoContainer}>
      <div className="text-center">
        <span>UPLOAD PHOTO</span>
      </div>
      <div className={formatClasses.join(" ")}>{image}</div>
    </div>
  );
};

export default uploadPhoto;
