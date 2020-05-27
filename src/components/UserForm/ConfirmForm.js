import React, { Component } from "react";
import style from "./FormsStyles.module.css";
import { createEvent } from "../../api/api";
import { getUserId } from "../../reducers/user";
import {connect} from 'react-redux';



export class ConfirmForm extends Component {
  continue = (event) => {
    event.preventDefault();
    console.log(this.props)
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
        <div>{brideName}</div>

        <div>{groomName}</div>

        <div>{eventDate.toString()}</div>

        <div>{hallName}</div>

        <div>{hallAdress}</div>

        <div>{hallTown}</div>
        {/* put choosen temp image like we done in _temp */}
        <div>{temp}</div>
        {/* put choosen form image like we done in _form (i think) */}
        <div>{form}</div>

        <div>{invitText}</div>

        <div>{posAnswer}</div>

        <div>{negAnswer}</div>

        <div>{question}</div>

        <div>{howMany}</div>

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

const mapStateToProps = state => ({
  userId: getUserId(state)
})

export default connect(mapStateToProps)(ConfirmForm);
