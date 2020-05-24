import React, { Component } from "react";
import style from "./FormsStyles.module.css";

export class FormInvitTemp extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { temp, handleChange } = this.props;

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
            onChange={handleChange("temp")}
          />
          <label for="A">Template A</label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="B"
            name="temp"
            type="radio"
            value="B"
            checked={temp === "B"}
            onChange={handleChange("temp")}
          />
          <label for="B">Template B</label>
        </div>
        <div className={style.inputGroup}>
          <input
            id="C"
            name="temp"
            type="radio"
            value="C"
            checked={temp === "C"}
            onChange={handleChange("temp")}
          />
          <label for="C">Template C</label>
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

export default FormInvitTemp;
