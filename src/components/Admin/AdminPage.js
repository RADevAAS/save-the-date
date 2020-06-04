import React, { Component, useState } from "react";
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
  };

  switchRender = () => {
    const { userStep } = this.state;
    this.setState({
      userStep,
    });
  };

  renderSwitch(userStep) {
    switch (userStep) {
      case 1:
        return (
          <div>
            <EventView
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <GuestsList
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <Budget
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <House
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <Preference
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
          </div>
        );
      case 6:
        return (
          <div>
            <ContactUs
              handleChange={this.handleChange}
              userStep={this.userStep}
              switchRender={this.switchRender}
            />
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
          <Navbar userStep={this.userStep} />
        </div>
        <div>{this.renderSwitch(userStep)}</div>
      </div>
    );
  }
}

export default AdminPage;
