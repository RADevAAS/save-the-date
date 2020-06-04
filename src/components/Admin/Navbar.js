import React, { Component } from "react";
import style from "./AdminPage.module.css";

export class Navbar extends Component {

render() {
 
const { switchStep, userStep } = this.props;

    return (
      <div>
        <div>Nav Bar</div>
        <div className={style.nav}>
          <div>
            <div className={style.menu}>
              <li id="1" className={userStep === 1 ? style.selected : style.unselected} onClick={() => switchStep(1)}>
                Event View
              </li>
              <li id="2" onClick={() => switchStep(2)}>
                Guests List
              </li>
              <li id="3" onClick={() => switchStep(3)}>
                Budget
              </li>
              <li id="4" onClick={() => switchStep(4)}>
                House
              </li>
              <li id="5" onClick={() => switchStep(5)}>
                Preferences
              </li>
              <li id="6" onClick={() => switchStep(6)}>
                Contact Us
              </li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
