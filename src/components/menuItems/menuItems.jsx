import React from "react";
import MenuItem from "./menuItem";
import classes from "./menuItems.module.css";

const MenuItems = (props) => {
  let menuClass = [classes.MenuItem];
  menuClass.push("d-block");
  menuClass.push("pl-3");
  return (
    <div>
      <MenuItem className={classFormat.join(" ")} link="/">
        Profile
      </MenuItem>
      <MenuItem className={classFormat.join(" ")} link="/settings">
        Settings
      </MenuItem>
      <MenuItem className={classFormat.join(" ")} link="/signout">
        Sign Out
      </MenuItem>
    </div>
  );
};

export default MenuItems;
