import React, {Fragment} from "react";
import Logo from "../../../assets/images/burger-logo.png";
import NavItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

const sideDrawer = props => {
  return (
    <Fragment className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavItems />
      </nav>
    </Fragment>
  );
};

export default sideDrawer;
