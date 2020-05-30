import React, { Component } from "react";
import style from "./FormsStyles.module.css";
import { createEvent } from "../../api/api";
import { getUserId } from "../../reducers/user";
import { connect } from "react-redux";

import FormA from "../../data/FormA.jpeg";
import FormB from "../../data/FormB.jpeg";
import FormC from "../../data/FormC.jpeg";

import TempA from "../../data/TempA.jpeg";
import TempB from "../../data/TempB.jpeg";
import TempC from "../../data/TempC.jpeg";


const _ImageTemp = {
  a: TempA,
  b: TempB,
  c: TempC,
};

const _ImageForm = {
  a: FormA,
  b: FormB,
  c: FormC,
};

export class ConfirmForm extends Component {
  continue = (event) => {
    event.preventDefault();
    console.log(this.props);
    //createEvent(this.props.userId, this.props.values);
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
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
      },
    } = this.props;

    return (
      <div>
        <div>Bride Name : {brideName}</div>

        <div>Groom Name : {groomName}</div>

        <div>Event Date : {eventDate.toString()}</div>

        <div>Hall Name : {hallName}</div>

        <div>Hall Adress : {hallAdress}</div>

        <div>Hall Town : {hallTown}</div>

        <div>
          Template : {temp}
          <img alt={`${_ImageTemp}`} className={style.imagesInConfirm} src={_ImageTemp} />
        </div>

        <div>
          Form : {form}
          <img alt={`${_ImageForm}`} className={style.imagesInConfirm} src={_ImageForm} />
        </div>

        <div>Invitation : {invitText}</div>

        <div>Postive Answer : {posAnswer}</div>

        <div>Negative Answer : {negAnswer}</div>

        <div>Question : {question}</div>

        <div>How Many : {howMany}</div>

        <button
          className={style.submitButton}
          label="back"
          primary
          style={style.button}
          onClick={this.back}
        >
          back
        </button>
        <button
          className={style.submitButton}
          label="continue"
          primary
          style={style.button}
          onClick={this.continue}
        >
          confirmer
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
});

export default connect(mapStateToProps)(ConfirmForm);
