import React, { Component } from "react";
import PropTypes from "prop-types";
import style from "./FormsStyles.module.css";

export class FormUserEvent extends Component {
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

  resetForm = () => {
    this.setState(() => ({
      userName: "",
      email: "",
      message: "",
    }));
  }

  render() {
    const { hallName, hallTown, hallAdress } = this.props;

    return (
      <form>
        <p>Entrez vos Information</p>

        <div>
          <label>
            hallName
            <input
              name="hallName"
              className={style.inputText}
              placeholder="hall name"
              type="string"
              onChange={this.handleChange}
              defaultValue={hallName}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            hallAdress
            <input
              name="hallAdress"
              className={style.inputText}
              placeholder="enter hallAdress name"
              type="string"
              onChange={this.handleChange}
              defaultValue={hallAdress}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            hallTown
            <input
              name="hallTown"
              className={style.inputText}
              placeholder="enter hallTown "
              type="string"
              onChange={this.handleChange}
              defaultValue={hallTown}
            />
          </label>
        </div>
        <br />

        <div>
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
          <button
            className={style.submitButton}
            label="reset"
            primary={true}
            style={style.button}
            onClick={this.resetForm}
          >
            reset
          </button>
        </div>
      </form>
    );
  }
}

FormUserEvent.propTypes = {
  hallName: PropTypes.string.isRequired,
  hallTown: PropTypes.string.isRequired,
  hallAdress: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default FormUserEvent;
