import React, { Component } from "react";
import Navbar from "./Navbar";
//import EventView from "./EventView";
import GuestsList from "./GuestsList";
import Budget from "./Budget";
import House from "./House";
import Preference from "./Preference";
import ContactUs from "../ContactUs/ContactUs";

//import style from "./AdminPage.module.css";

const STEP = [
  GuestsList,
  GuestsList,
  Budget,
  House,
  Preference,
  ContactUs,
]

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
    const StepComponent = STEP[userStep - 1]
    return <StepComponent/>
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
