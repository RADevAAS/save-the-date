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
    userStep: 0,
  };

  switchStep = (newStep) => {
    this.setState({
      userStep: newStep,
    });
  };

  renderSwitch = (userStep) => {
    const Step = Steps[userStep] // changer a partir de 0 //DONE
    return (
        <div>
          <Step/>
        </div>
    )
  }

  render() {
    const { userStep } = this.state;

    return (
      <div>
        <div>
          <Navbar switchStep={this.switchStep} userStep={userStep} steps={[Steps]}/>
        </div>
        <div>{this.renderSwitch(userStep)}</div>
      </div>
    );
  }
}

export default AdminPage;
