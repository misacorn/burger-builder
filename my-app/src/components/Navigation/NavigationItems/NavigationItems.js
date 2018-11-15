import React from "react";
import NavItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navItems = () => (
  <ul className={classes.NavItems}>
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">Checkout</NavItem>
  </ul>
);

export default navItems;
