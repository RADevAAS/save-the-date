import React, { Component } from "react";
import Navbar from "./Navbar";
//import EventView from "./EventView";
import GuestsList from "./GuestsList";
import Budget from "./Budget";
import House from "./House";
import Preference from "./Preference";
import ContactUs from "../ContactUs/ContactUs";

//import style from "./AdminPage.module.css";

export class AdminPage extends Component {
  state = {
    userStep: 1
  };

  switchStep = (newStep) => {
    this.setState({
      userStep: newStep,
    });
  };

  renderSwitch(userStep) {
    switch (userStep) {
      case 1:
        return (
          <div>
            <GuestsList />
          </div>
        );
      case 2:
        return (
          <div>
            <GuestsList />
          </div>
        );
      case 3:
        return (
          <div>
            <Budget />
          </div>
        );
      case 4:
        return (
          <div>
            <House />
          </div>
        );
      case 5:
        return (
          <div>
            <Preference />
          </div>
        );
      case 6:
        return (
          <div>
            <ContactUs />
          </div>
        );

      default:
        return null;
    }
  }

  render() {
    const { userStep } = this.state;

    return (
      <div>
        <div>
          <Navbar switchStep={this.switchStep} userStep={userStep} />
        </div>
        <div>{this.renderSwitch(userStep)}</div>
      </div>
    );
  }
}

export default AdminPage;
