import React from "react";
import classes from "./navigateBar.module.css";
import usrImg from "../../assets/smalluser.png";
import HamburgerBars from "../../components/hamburgerBars/hamburgerBars";

const NavBar = (props) => {
  let attachBurgerClass = [classes.HamBurger];

  let image = <img src={usrImg}></img>;
  if (props.base64string != null) {
    image = (
      <img
        style={{ borderRadius: "50%", width: "65px", height: "65px" }}
        src={"data:image/png;base64, " + props.base64string}
      ></img>
    );
  }

  return (
    <div className={classes.NavBar}>
      <div className={attachBurgerClass}>
        <HamburgerBars clicked={props.clicked} />
      </div>
      <div className="d-block pr-5 float-right pt-0 h-5 ">
        <div className="d-block">{props.username}</div>
        <div className="d-block">{image}</div>
      </div>
    </div>
  );
};

export default NavBar;
