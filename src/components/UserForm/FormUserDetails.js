import React, { Component } from "react";
import style from "./FormsStyles.module.css";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

export class FormUserDetails extends Component {
  handleChange = (event) => {
    event.preventDefault();
    const { handleChange } = this.props;
    handleChange({ [event.target.name]: event.target.value });
  };

  handleDateChange = (eventDate) => {
    const { handleChange } = this.props;
    handleChange({ eventDate });
  };

  render() {
    const { brideName, groomName, eventDate, nextStep } = this.props;

    return (
      <form>
        <p>Entrez vos Informations</p>

        <div>
          <label>bride</label>
          <br />
          <input
            name="brideName"
            className={style.inputText}
            placeholder="enter your name"
            type="string"
            onChange={this.handleChange}
            defaultValue={brideName}
          />
        </div>
        <br />
        <div>
          <label>groom</label>
          <br />
          <input
            name="groomName"
            className={style.inputText}
            placeholder="enter your name"
            type="string"
            onChange={this.handleChange}
            defaultValue={groomName}
          />
        </div>
        <br />
        <div>
          <label>
            date
            <DatePicker
              withPortal
              placeholderText="Click to select a date"
              name="eventDate"
              selected={eventDate}
              onChange={this.handleDateChange}
              minDate={new Date()}
              timeInputLabel="Time :"
              showTimeInput
              dateFormat="dd MMMM yyyy HH:mm"
              className="form-control"
              isClearable
              showMonthDropdown
              showYearDropdown
              scrollableYearDropdown
              defaultValue={eventDate}
            />
          </label>
        </div>
        <br />

        <br />
        <div>
          <button
            className={style.submitButton}
            label="continue"
            primary={true}
            style={style.button}
            onClick={nextStep}
          >
            continuer
          </button>
        </div>
        <button
          className={style.submitButton}
          label="reset"
          primary={true}
          style={style.button}
          onClick={this.reset}
        >
          reset
        </button>
      </form>
    );
  }
}

FormUserDetails.propTypes = {
  brideName: PropTypes.string.isRequired,
  groomName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default FormUserDetails;
