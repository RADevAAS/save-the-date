import React, { Component } from "react";
import style from "./AdminPage.module.css";

export class Navbar extends Component {



  render() {

    const { userStep } = this.props;


    return (
      <div>
        <div>Nav Bar</div>
        <div className={style.nav}>
          <div>
            <div className={style.menu}>
              <li onClick={userStep === 1}>Event View</li>
              <li onClick={userStep === 2}>Guests List</li>
              <li onClick={userStep === 3}>Budget</li>
              <li onClick={userStep === 4}>House</li>
              <li onClick={userStep === 5}>Preferences</li>
              <li onClick={userStep === 6}>Contact Us</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
