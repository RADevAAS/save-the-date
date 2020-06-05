import React, { Component } from "react";
import style from "./AdminPage.module.css";

export class Navbar extends Component {

  navTitle(userStep) {
    switch (userStep) {
      case 1:
        return <div>EventView</div>;
      case 2:
        return <div>GuestsList</div>;
      case 3:
        return <div>Budget</div>;
      case 4:
        return <div>House</div>;
      case 5:
        return <div>Preference</div>;
      case 6:
        return <div>ContactUs</div>;
      default:
        return <div>Navbar</div>;
    }
  }

  render() {
    const { switchStep, userStep } = this.props;

    return (
      <div>
        <div className={style.navTitle}>{this.navTitle(userStep)}
        <div className={style.burger}></div>
        </div>
        <div className={style.nav}>
          <div >
            <div className={style.menu}>
              <li
                id="1"
                className={userStep === 1 ? style.selected : style.unselected}
                onClick={() => switchStep(1)}
              >
                Event View
              </li>
              <li
                id="2"
                className={userStep === 2 ? style.selected : style.unselected}
                onClick={() => switchStep(2)}
              >
                Guests List
              </li>
              <li
                id="3"
                className={userStep === 3 ? style.selected : style.unselected}
                onClick={() => switchStep(3)}
              >
                Budget
              </li>
              <li
                id="4"
                className={userStep === 4 ? style.selected : style.unselected}
                onClick={() => switchStep(4)}
              >
                House
              </li>
              <li
                id="5"
                className={userStep === 5 ? style.selected : style.unselected}
                onClick={() => switchStep(5)}
              >
                Preferences
              </li>
              <li
                id="6"
                className={userStep === 6 ? style.selected : style.unselected}
                onClick={() => switchStep(6)}
              >
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
