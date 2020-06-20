import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./FormsStyles.module.css";
import FormA from "../../assets/images/FormA.jpeg";

export class FormInvitForm extends Component {
  handleChange = (event) => {
    event.preventDefault();
    const { handleChange } = this.props;
    handleChange({ [event.target.name]: event.target.value });
  };

  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { form } = this.props;

    return (
      <form>
        <p>choisissez un Formulaire de Reponse</p>

        <div className={style.inputGroup}>
          <input
            id="A"
            name="form"
            type="radio"
            value="A"
            checked={form === "A"}
            onChange={this.handleChange}
          />
          <label for="A">
            <img alt="A" className={style.imagesInRadio} src={FormA} />
          </label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="B"
            name="form"
            type="radio"
            value="B"
            checked={form === "B"}
            onChange={this.handleChange}
          />
          <label for="B">
            <img alt="B" className={style.imagesInRadio} src={FormA} />
          </label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="C"
            name="form"
            type="radio"
            value="C"
            checked={form === "C"}
            onChange={this.handleChange}
          />
          <label for="C">
            <img alt="C" className={style.imagesInRadio} src={FormA} />
          </label>
        </div>

        <button
          className={style.submitButton}
          label="back"
          primary={true}
          style={style.button}
          onClick={this.back}
        >
          back
        </button>

        <button
          className={style.submitButton}
          label="continue"
          primary={true}
          style={style.button}
          onClick={this.continue}
        >
          continuer
        </button>
      </form>
    );
  }
}

FormInvitForm.propTypes = {
  form: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormInvitForm;
