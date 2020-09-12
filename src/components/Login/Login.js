import React from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Login.module.css";
import PropTypes from "prop-types";

import { NewLoader } from "../Loader/Loader";

import { signIn } from "../../firebase";
import { getUserId } from "../../reducers/user";
import { getEventPublicData } from "../../api/api";
import { defaultStyles } from "react-modal";


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
      return <NewLoader />;
    }

    return (
      <div className={style.bg}>
        <Link to="/Home">
          <button className={style.homeButton}>Home</button>
        </Link>
        <div className={style.container}>
          <div className={style.rightSide}>
            <div className={style.title}>Sign In</div>
            <div className={style.loginForm}>
              {error !== null && <div>{error}</div>}
              <form>
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
                <button
                  onClick={this.signIn}
                  className={style.loginButton}
                  disabled={password === ""}
                >
                  Sign in
                </button>


              </form>
              <div className={style.nam}> Not a member ? <Link to="/contactus">Contact Us</Link>  </div>
            </div>
          </div>
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
