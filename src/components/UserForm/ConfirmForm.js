import React, { Component } from "react";
import style from "./FormsStyles.module.css";
import Modal from "../Modal/Modal";
import RingsLoader from "../Loader/RingsLoader";
import PropTypes from "prop-types";

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
  A: TempA,
  B: TempB,
  C: TempC,
};

const _ImageForm = {
  A: FormA,
  B: FormB,
  C: FormC,
};

export class ConfirmForm extends Component {
  state = {
    loader: false,
    show: false,
    modalTitle: "Are you Sure ?",
    modalText: "Do you want to send this data like this?",
  };

  showLoader = (event) => {
    this.setState({
      loader: !this.state.loader,
    });
  };

  showModal = (event) => {
    this.setState({
      show: !this.state.show,
    });
  };

  onClose = (event) => {
    this.props.show = false;
  };

  continue = async (event) => {
    event.preventDefault();
    console.log(this.props);
    try {
      const response = await createEvent(this.props.userId, this.props.values);
      console.log("Success", response);
      this.showLoader();
    } catch (e) {
      console.log("Failed", e);
      this.showLoader();
    }
    this.props.nextStep();
    this.showLoader();
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
        ts,
        hallName,
        hallAdress,
        hallTown,
        template,
        invitText,
        posAnswer,
        negAnswer,
        question,
        howMany,
        form,
      },
    } = this.props;

    const showLoader = this.state.showLoader;
    return (
      <div>
        {showLoader ? (
          <RingsLoader />
        ) : (
          <div>
            <div>Bride Name : {brideName}</div>

            <div>Groom Name : {groomName}</div>

            <div>Event Date : {ts.toString()}</div>

            <div>Hall Name : {hallName}</div>

            <div>Hall Adress : {hallAdress}</div>

            <div>Hall Town : {hallTown}</div>

            <div>
              Template : {template}
              <img
                alt={`${_ImageTemp}`}
                className={style.imagesInConfirm}
                src={_ImageTemp}
              />
            </div>

            <div>
              Form : {form}
              <img
                alt={`${_ImageForm}`}
                className={style.imagesInConfirm}
                src={_ImageForm}
              />
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

            <Modal
              onClose={this.showModal}
              onClick={this.continue}
              show={this.state.show}
              modalTitle={this.state.modalTitle}
            >
              {this.state.modalText}
            </Modal>
            <button
              className={style.submitButton}
              label="continue"
              primary
              style={style.button}
              onClick={(event) => {
                this.showModal(event);
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
});

ConfirmForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  brideName: PropTypes.string.isRequired,
  groomName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  hallName: PropTypes.string.isRequired,
  hallAdress: PropTypes.string.isRequired,
  hallTown: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  invitText: PropTypes.string.isRequired,
  posAnswer: PropTypes.string.isRequired,
  negAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  howMany: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ConfirmForm);
