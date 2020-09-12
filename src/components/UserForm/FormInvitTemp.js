import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./FormsStyles.module.css";
import TempA from "../../assets/images/TempA.jpeg";

export class FormInvitTemp extends Component {
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
    const { temp } = this.props;

    return (
      <form>
        <p>choisissez un Template</p>

        <div className={style.inputGroup}>
          <input
            id="A"
            name="temp"
            type="radio"
            value="A"
            checked={temp === "A"}
            onChange={this.handleChange}
          />
          <label for="A">
            <img alt="A" className={style.imagesInRadio} src={TempA} />
          </label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="B"
            name="temp"
            type="radio"
            value="B"
            checked={temp === "B"}
            onChange={this.handleChange}
          />
          <label for="B">
            <img alt="B" className={style.imagesInRadio} src={TempA} />
          </label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="C"
            name="temp"
            type="radio"
            value="C"
            checked={temp === "C"}
            onChange={this.handleChange}
          />
          <label for="C">
            <img alt="C" className={style.imagesInRadio} src={TempA} />
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

FormInvitTemp.propTypes = {
  temp: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormInvitTemp;
