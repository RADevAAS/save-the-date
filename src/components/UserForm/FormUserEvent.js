import React, { Component } from "react";
import style from "./FormsStyles.module.css";

export class FormUserEvent extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  reset = () => {
    this.hallName = "";
    this.hallAdress = "";
    this.hallTown = "";
  };

  render() {
    const { hallName, hallTown, hallAdress, handleChange } = this.props;

    return (
      <form>
        <p>Entrez vos Information</p>

        <div>
          <label>
            hallName
            <input
              required
              name="hallName"
              className={style.inputText}
              placeholder="hall name"
              type="string"
              onChange={handleChange("hallName")}
              defaultValue={hallName}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            hallAdress
            <input
              required
              name="hallAdress"
              className={style.inputText}
              placeholder="enter hallAdress name"
              type="string"
              onChange={handleChange("hallAdress")}
              defaultValue={hallAdress}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            hallTown
            <input
              required
              name="hallTown"
              className={style.inputText}
              placeholder="enter hallTown "
              type="string"
              onChange={handleChange("hallTown")}
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
            onClick={this.reset}
          >
            reset
          </button>
        </div>
      </form>
    );
  }
}

export default FormUserEvent;
