import React, { Component } from "react";
import Navbar from "./Navbar";
import Steps from "./AdminTabs"
import style from "./AdminPage.module.css";

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
    const Step = Steps[userStep].component // changer a partir de 0 //DONE
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
          <Navbar switchStep={this.switchStep} userStep={userStep}/>
        </div>
        <div className={style.renderView}>{this.renderSwitch(userStep)}</div>
      </div>
    );
  }
}

export default AdminPage;
