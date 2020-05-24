import React, { Component } from "react";
import style from "./FormsStyles.module.css";

export class FormInvitText extends Component {
  continue = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  back = (event) => {
    event.preventDefault();
    this.props.prevStep();
  };

  reset = () => {
    this.invitText = "";
    this.posAnswer = "";
    this.negAnswer = "";
    this.question = "";
    this.numberOfGuests = "";
  };

   handleChange = event => {
    this.props.handleChange({ [event.target.name]: event.target.value})
}

  render() {
    const {
      invitText,
      posAnswer,
      negAnswer,
      question,
      numberOfGuests,
      handleChange,
    } = this.props;

    return (
      <form>
        <p>Entrez votre texte</p>

        <div>
          <label>
            saveTheDate
            <input
              required
              name="invitText"
              className={style.inputText}
              placeholder="Vous êtes conviés au mariage qui se déroulera le"
              type="string"
              onChange={handleChange}
              defaultValue={invitText}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            positive answer
            <input
              required
              name="posAnswer"
              className={style.inputText}
              placeholder="YES"
              type="string"
              onChange={handleChange}
              defaultValue={posAnswer}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            negative answer
            <input
              required
              name="negAnswer"
              className={style.inputText}
              placeholder="NO"
              type="string"
              onChange={handleChange}
              defaultValue={negAnswer}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            question
            <input
              required
              name="question"
              className={style.inputText}
              placeholder="Are you coming ?"
              type="string"
              onChange={handleChange}
              defaultValue={question}
            />
          </label>
        </div>
        <br />
        <div>
          <label>
            numberOfGuests
            <input
              required
              name="numberOfGuests"
              className={style.inputText}
              placeholder="How many will you be ?"
              type="string"
              onChange={handleChange}
              defaultValue={numberOfGuests}
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

export default FormInvitText;
