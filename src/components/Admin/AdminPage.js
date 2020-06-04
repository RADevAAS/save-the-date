import React, { Component } from "react";
import Navbar from "./Navbar";
import EventView from "./EventView";
import GuestsList from "./GuestsList";
import Budget from "./Budget";
import House from "./House";
import Preference from "./Preference";
import ContactUs from "../ContactUs/ContactUs";

export class AdminPage extends Component {
  state = {
    userStep: 1,
    newStep: "",
  };

  handleChange = (newState) => {
    this.setState(newState);
  };

  switchRender = () => {
    const { newStep } = this.state;
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
          <Navbar switchRender={this.switchRender} newStep={this.newStep} handleChange={this.handleChange} />
        </div>
        <div>{this.renderSwitch(userStep)}</div>
      </div>
    );
  }
}

export default AdminPage;
