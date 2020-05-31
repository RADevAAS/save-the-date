import React from "react";
import style from "./ContactUs.module.css";
import PropTypes from "prop-types";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = (event) => {
    const target = event.target;
    let value = target.value;
    const name = target.name;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  resetForm() {
    this.setState({ userName: "", email: "", message: "" });
  }

  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <div>
          <label for="userName">
            {" "}
            Name :
            <div>
              <input
                className={style.inputText}
                placeholder="Name"
                name="userName"
                type="string"
                onChange={this.handleChange}
                value={this.state.userName}
              />
            </div>
          </label>
          <label for="email">
            Email address :
            <div>
              <input
                className={style.inputText}
                placeholder="e.g : myemail@gmail.com"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
          </label>
          <label for="message">
            Message :
            <div>
              <textarea
                className={style.inputText}
                placeholder="Some text"
                name="message"
                rows="5"
                type="string"
                onChange={this.handleChange}
                value={this.state.message}
              />
            </div>
          </label>

          <button type="submit" className={style.submitButton}>
            Submit
          </button>
          <br></br>
          <button type="reset" className={style.submitButton} resetForm>
            reset
          </button>
        </div>
      </form>
    );
  }
}

ContactUs.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default ContactUs;
