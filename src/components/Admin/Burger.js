import React, { useState } from "react";
import style from "./AdminPage.module.css";
import SideBar from "./SideBar";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={style.burger}
      open={open}
      onClick={() => setOpen(!open)}
    >
        <SideBar open={open} />
    </div>
  );
};

export default Burger;
