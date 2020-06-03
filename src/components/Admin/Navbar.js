import React from "react";
import style from "./AdminPage.module.css";
import Burger from "./Burger";

const Navbar = () => {
  return (
    <div>
      <div className={style.logo}>Nav Bar</div>
      <div className={style.nav}>
        <Burger />
      </div>
    </div>
  );
};

export default Navbar;
