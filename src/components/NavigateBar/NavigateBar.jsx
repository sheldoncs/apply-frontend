import React from "react";
import classes from "./navigateBar.module.css";
import usrImg from "../../assets/smalluser.png";
import HamburgerBars from "../../components/hamburgerBars/hamburgerBars";

const NavBar = (props) => {
  let attachBurgerClass = [classes.HamBurger];

  return (
    <div className={classes.NavBar}>
      <div className={attachBurgerClass}>
        <HamburgerBars clicked={props.clicked} />
      </div>
      <div className="d-block pr-5 float-right pt-0 h-5 ">
        <div className="d-block">{props.username}</div>
        <div className="d-block">
          <img src={usrImg}></img>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
