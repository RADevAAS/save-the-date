import React from "react";
import style from "./AdminPage.module.css";

const steps = [
    'EventView',
    'GuestsList',
    'Budget',
    'House',
    'Preference',
    'ContactUs',
]

const Navbar = (props) => {
  const { userStep } = props;

  const renderNavItem = (title, index) => {
    const { switchStep, userStep } = props;
    const number = index + 1
    return (
        <li
            id={`${number}`}
            className={userStep === number ? style.selected : style.unselected}
            onClick={() => switchStep(number)}
        >
          {title}
        </li>
    )
  }

  return (
    <div>
      <div className={style.navTitle}>
        <div>
          {steps[userStep]}
        </div>
        <div className={style.burger}/>
      </div>
      <div className={style.nav}>
        <div >
          <div className={style.menu}>
            {steps.map(renderNavItem)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
