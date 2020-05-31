import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

export class SuccessPage extends Component {
  state = {
    redirect: false,
    seconds: 5,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds - 1,
      }));
    }, 1000);
    this.redirect = setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.redirect);
  }

  render() {
    const { seconds } = this.state;
    //for now redirect to home apres on verra quand on aura creer la logique pour les admins
    return this.state.redirect ? (
      <Redirect to="/Home" />
    ) : (
      <div>
        Your event has been created, you will now be redirected to your personal
        page in {seconds} secs
      </div>
    );
  }
}

SuccessPage.propTypes = {
  redirect: PropTypes.bool.isRequired,
  seconds: PropTypes.number.isRequired,
};

export default SuccessPage;
