import React, { Component } from "react";
import Navbar from "./Navbar";
import EventView from "./EventView";
import GuestsList from "./GuestsList";
import Budget from "./Budget";
import House from "./House";
import Preference from "./Preference";
import ContactUs from "../ContactUs/ContactUs";

const Steps = [
  EventView,
  GuestsList,
  Budget,
  House,
  Preference,
  ContactUs,
]

export class AdminPage extends Component {
  state = {
    userStep: 1,
  };

  switchStep = (newStep) => {
    this.setState({
      userStep: newStep,
    });
  };

  renderSwitch = (userStep) => {
    const Step = Steps[userStep - 1] // TODO changer a partir de 0
    return (
        <div>
          <Step />
        </div>
    )
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
