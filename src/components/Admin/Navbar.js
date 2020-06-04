import React, { useState } from "react";
import style from "./AdminPage.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  switchView = (event) => {
    event.preventDefault();
    this.props.userStep();
  };

  return (
    <div>
      <div className={style.logo}>Nav Bar</div>
      <div className={style.nav}>
        <div
          className={style.burger}
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div className={style.menu}>
            <li onClick={this.switchView}>Event View</li>
            <li onClick={this.switchView}>Guests List</li>
            <li onClick={this.switchView}>Budget</li>
            <li onClick={this.switchView}>House</li>
            <li onClick={this.switchView}>Preferences</li>
            <li onClick={this.switchView}>Contact Us</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
