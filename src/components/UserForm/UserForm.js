import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormUserEvent from "./FormUserEvent";
import FormInvitForm from "./FormInvitForm";
import FormInvitTemp from "./FormInvitTemp";
import FormInvitText from "./FormInvitText";
import ConfirmForm from "./ConfirmForm";
import SuccessPage from "./SuccessPage";
import style from "./FormsStyles.module.css";

export class UserForm extends Component {
  state = {
    step: 1,
    brideName: "",
    groomName: "",
    eventDate: new Date(),
    hallName: "",
    hallAdress: "",
    hallTown: "",
    temp: "null",
    form: "null",
    invitText: "You are invited to the wedding at",
    posAnswer: "Of course",
    negAnswer: "Unfortunately",
    question: "Are you coming ?",
    howMany: "How many will you be ?",
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
      hallName,
      hallAdress,
      hallTown,
      temp,
      invitText,
      posAnswer,
      negAnswer,
      question,
      howMany,
      form,
    } = this.state;
    const values = {
      brideName,
      groomName,
      eventDate,
      hallName,
      hallAdress,
      hallTown,
      temp,
      invitText,
      posAnswer,
      negAnswer,
      question,
      howMany,
      form,
    };

    switch (step) {
      case 3:
        return (
          <div className={style.form}>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              brideName={brideName}
              groomName={groomName}
              eventDate={eventDate}
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
      case 1:
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
            <FormInvitForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              form={form}
            />
          </div>
        );
      case 5:
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
              howMany={howMany}
            />
          </div>
        );
      case 6:
        return (
          <div className={style.form}>
            <ConfirmForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
          </div>
        );
      case 7:
        return <SuccessPage />;
      default:
        return <div>JE sais pas</div>;
    }
  }
}

export default UserForm;
