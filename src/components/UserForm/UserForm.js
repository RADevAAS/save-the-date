import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormUserEvent from "./FormUserEvent";
import FormInvitTemp from "./FormInvitTemp";
import FormInvitText from "./FormInvitText";
import ConfirmForm from "./ConfirmForm";
import SuccessPage from "./SuccessPage";
import style from "./FormsStyles.module.css";
import "react-datepicker/dist/react-datepicker.css";

export class UserForm extends Component {
  state = {
    step: 1,
    brideName: "",
    groomName: "",
    email: "",
    tel: "",
    eventDate: new Date(),
    hallName: "",
    hallAdress: "",
    hallTown: "",
    temp: "null",
    invitText: "",
    posAnswer: "",
    negAnswer: "",
    question: "",
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (newState) => {
    this.setState(newState);
  };

  render() {
    const { step } = this.state;
    const {
      brideName,
      groomName,
      eventDate,
      email,
      tel,
      hallName,
      hallAdress,
      hallTown,
      temp,
      invitText,
      posAnswer,
      negAnswer,
      question,
      numberOfGuests,
    } = this.state;
    const values = {
      brideName,
      groomName,
      eventDate,
      email,
      tel,
      hallName,
      hallAdress,
      hallTown,
      temp,
      invitText,
      posAnswer,
      negAnswer,
      question,
      numberOfGuests,
    };

    switch (step) {
      case 1:
        return (
          <div className={style.form}>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              brideName={brideName}
              groomName={groomName}
              eventDate={eventDate}
              tel={tel}
              email={email}
            />
          </div>
        );
      case 2:
        return (
          <div className={style.form}>
            <FormUserEvent
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              hallName={hallName}
              hallAdress={hallAdress}
              hallTown={hallTown}
            />
          </div>
        );
      case 3:
        return (
          <div className={style.form}>
            <FormInvitTemp
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              temp={temp}
            />
          </div>
        );
      case 4:
        return (
          <div className={style.form}>
            <FormInvitText
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              invitText={invitText}
              posAnswer={posAnswer}
              negAnswer={negAnswer}
              question={question}
              numberOfGuests={numberOfGuests}
            />
          </div>
        );
      case 5:
        return (
          <div className={style.form}>
            <ConfirmForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      case 6:
        return <SuccessPage />;
      default:
        return <div>JE sais pas</div>;
    }
  }
}

export default UserForm;
