import React from "react";
import style from "./AdminPage.module.css";

const SideBar = () => {
  return (
    <div>
      <div className={style.menu}>
        <li>Event View</li>
        <li>Guests List</li>
        <li>Budget</li>
        <li>House</li>
        <li>Preferences</li>
        <li>Contact Us</li>
      </div>
    </div>
  );
};

export default SideBar;
