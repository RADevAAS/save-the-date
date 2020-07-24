import React from "react";
import style from "./FormB.module.css";
import PropTypes, {number} from "prop-types"

import data from "../../assets/mock/data";

const { negAnswer, posAnswer, question, firstName, lastName, tel } = data;

class FormB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isComming: null,
        name: "",
        count: null,
        tel: "",

    };
  }

  handleChange = (event, index) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    if (name === "numberOfGuests" && value < 0) {
      value = 0;
    }

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  handleChangeRadio = (event) => {
    const isComming = event.target.value === "positive";
    this.setState({
        isComming,
    });
  };

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
    const { isComming } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <p>{question}</p>

        <div className={style.inputGroup}>
          <input
            id="yes"
            name="isComming"
            type="radio"
            value="positive"
            checked={isComming === true}
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
            checked={isComming === false}
            onChange={this.handleChangeRadio}
          />
          <label for="no">{negAnswer}</label>
        </div>

{isComming &&          <div>
        <div>
          <label>
            <input
              required
              className={style.inputText}
              placeholder={firstName}
              name="name"
              type="string"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            <input
              required
              className={style.inputText}
              placeholder={number}
              name="number"
              type="number"
              value={this.state.number}
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
          </div>}

        <button
          type="submit"
          className={style.submitButton}
          disabled={this.state.answer === null}
        >
          Envoyez
        </button>
      </form>
    );
  }
}

FormB.propTypes = {
  negAnswer: PropTypes.string.isRequired,
  posAnswer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
};

export default FormB;
