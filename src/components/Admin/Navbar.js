import React, { Component } from "react";
import style from "./AdminPage.module.css";

export class Navbar extends Component {

  handleChange = (event) => {
    event.preventDefault();
    const { userStep } = this.props;
    console.log(userStep)
    console.log(this.userStep)
    console.log(this.props.userStep)
  };

  render() {
    return (
      <div>
        <div>Nav Bar</div>
        <div className={style.nav}>
          <div>
            <div className={style.menu}>
              <li onClick={this.userStep=1}>Event View</li>
              <li onClick={this.userStep=2}>Guests List</li>
              <li onClick={this.userStep=3}>Budget</li>
              <li onClick={this.userStep=4}>House</li>
              <li onClick={this.userStep=5}>Preferences</li>
              <li onClick={this.userStep=6}>Contact Us</li>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
