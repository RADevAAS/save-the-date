import React, { Component } from "react";
import style from "./AdminPage.module.css";

export class Navbar extends Component {

  handleChange = (event) => {
    const { handleChange } = this.props;
    handleChange({ event });
  };

  render() {
 
const {  } = this.props;

    return (
      <div>
        <div>Nav Bar</div>
        <div className={style.nav}>
          <div>
            <div className={style.menu}>
              <li id="1" onClick={() => this.handleChange({newStep: 1})}>
                Event View
              </li>
              <li id="2" onClick={() => this.handleChange({newStep: 2})}>
                Guests List
              </li>
              <li id="3" onClick={() => this.handleChange({newStep: 3})}>
                Budget
              </li>
              <li id="4" onClick={() => this.handleChange({newStep: 4})}>
                House
              </li>
              <li id="5" onClick={() => this.handleChange({newStep: 5})}>
                Preferences
              </li>
              <li id="6" onClick={() => this.handleChange({newStep: 6})}>
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
