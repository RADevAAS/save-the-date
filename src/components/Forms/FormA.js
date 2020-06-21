import React from "react";
import style from "./FormA.module.css";
import PropTypes from "prop-types";

import data from "../../assets/mock/data";

const { negAnswer, posAnswer, question, firstName, lastName, tel } = data;

class FormA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
      numberOfGuests: 0,
      firstName: "",
      lastName: "",
      tel: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (name === "numberOfGuests" && value < 0) {
      value = 0;
    }

    this.setState({
      [name]: value,
    });
  };

  handleChangeRadio = (event) => {
    const answer = event.target.value === "positive" ? true : false; // TODO simplify

    this.setState({
      answer,
    });
  };

  // TODO use setGuestData
  handleSubmit = (event) => {
    event.preventDefault();

    alert(`${this.state.firstName}
              ${this.state.lastName}
              ${this.state.email}
              ${this.state.tel}
              réponse ${this.state.answer}
              et vous serez
              ${this.state.numberOfGuests} personnes`);
  };

  render() {
      // todo destructuring
    const { answer } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <p>{question}</p>

        <div className={style.inputGroup}>
          <input
            id="yes"
            name="answer"
            type="radio"
            value="positive"
            checked={answer === true}
            onChange={this.handleChangeRadio}
          />
          <label for="yes">{posAnswer}</label>
        </div>

        <div className={style.inputGroup}>
          <input
            id="no"
            name="answer"
            type="radio"
            value="negative"
            checked={answer === false}
            onChange={this.handleChangeRadio}
          />
          <label for="no">{negAnswer}</label>
        </div>

        <div>
          <label>
            <input
              required
              className={style.inputText}
              placeholder={firstName}
              name="firstName"
              type="string"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <input
              required
              className={style.inputText}
              placeholder={lastName}
              name="lastName"
              type="string"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <input
              className={style.inputText}
              placeholder={tel}
              name="tel"
              type="tel"
              value={this.state.tel}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button
          type="submit"
          className={style.submitButton}
          disabled={answer === null}
        >
          Envoyez
        </button>
      </form>
    );
  }
}

FormA.propTypes = {
  negAnswer: PropTypes.string.isRequired,
  posAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

export default FormA;
