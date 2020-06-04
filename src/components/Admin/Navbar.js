import React, { useState } from "react";
import style from "./AdminPage.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let switchView = "";
// stam pour pas quil y ai une erreur
  switchView = () => {
   // event.preventDefault();
   //this.props.userStep();
   console.log('voila')
 };

  return (
    <div>
      <div >Nav Bar</div>
      <div className={style.nav}>
        <div
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div className={style.menu}>
            <li onClick={switchView}>Event View</li>
            <li onClick={switchView}>Guests List</li>
            <li onClick={switchView}>Budget</li>
            <li onClick={switchView}>House</li>
            <li onClick={switchView}>Preferences</li>
            <li onClick={switchView}>Contact Us</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
