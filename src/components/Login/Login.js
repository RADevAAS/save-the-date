import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Login.module.css";
import PropTypes from "prop-types";

import RingsLoader from "../Loader/RingsLoader";
import HeartsLoader from "../Loader/HeartsLoader";
import PuffLoader from "../Loader/PuffLoader";

import { signIn } from "../../firebase";
import { getUserId } from "../../reducers/user";
import {
  getEventPublicData,
  createEvent,
  getGuestList,
  setGuestData,
  updateEvent,
} from "../../api/api";
// TODO add link to go back to home / header

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: null,
    user: null,
    loading: false,
  };

  signIn = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = await signIn(email, password);
    console.log("user", user);
  };

  getEventPublicData = async () => {
    const x = await getEventPublicData("abcdefg");
    console.log("getEventPublicData", x);
  };

  getGuestList = async () => {
    const x = await getGuestList("abcdefg");
    console.log("getGuestList", x);
  };

  setGuestData = async () => {
    const x = await setGuestData("abcdefg", {
      isComming: true,
      name: "name1",
      count: Date.now(),
      tel: Date.now(),
    });
    console.log("setGuestData", x);
  };

  createEvent = async () => {
    try {
      this.setState({ loading: true });
      const x = await createEvent("qwertyuiop", { template: "a" });
      console.log(
        `%c ${new Date().toLocaleTimeString()}`,
        "color: greenyellow;",
        "ln.59 - Login.createEvent(), x:",
        x
      );
      this.setState({ loading: false });
      return true;
    } catch (e) {
      console.log("ERROR", e);
      this.setState({ loading: false });
      return false;
    }
  };

  updateEvent = async () => {
    const x = await updateEvent();
    console.log("updateEvent", x);
  };

  onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      this.setState({ email: value });
    } else if (name === "userPassword") {
      this.setState({ password: value });
    }
  };

  render() {
    const { email, password, error } = this.state;
    const { userId } = this.props;
    if (userId) {
      return <Redirect to={`/admin`} />;
    }
    if (this.state.loading) {
      return <RingsLoader />;
    }

    return (
      <div className={style.form}>
        <div>Sign In</div>
        <div>
          {error !== null && <div>{error}</div>}
          <form>
            <label htmlFor="userEmail">Email :</label>
            <input
              required
              className={style.inputText}
              type="email"
              name="userEmail"
              value={email}
              placeholder="E.g: your_mail@gmail.com"
              id="userEmail"
              onChange={this.onChangeHandler}
            />
            <br />

            <label htmlFor="userPassword">Password :</label>

            <input
              required
              className={style.inputText}
              type="password"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={this.onChangeHandler}
            />
            <br />
            <button onClick={this.signIn} className={style.loginButton}>
              Sign in
            </button>
          </form>
        </div>
        <div>
          <button onClick={this.getEventPublicData}>getEventPublicData</button>
          <button onClick={this.createEvent}>createEvent</button>
          <button onClick={this.getGuestList}>getGuestList</button>
          <button onClick={this.setGuestData}>setGuestData</button>
          <button onClick={this.updateEvent}>updateEvent</button>
          <Link to="/">GO TO HOME</Link>
          <RingsLoader />
          <HeartsLoader />
          <PuffLoader />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userId: getUserId(state),
});

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  getEventPublicData: PropTypes.func.isRequired,
  createEvent: PropTypes.func.isRequired,
  getGuestList: PropTypes.func.isRequired,
  setGuestData: PropTypes.func.isRequired,
  updateEvent: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  getUserId: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Login);
