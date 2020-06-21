import React, { Component } from "react";
import style from "./AdminPage.module.css";
import Hamburger_icon from "../../assets/images/Hamburger_icon.png";
import close from "../../assets/images/close.png";



class Navbar extends Component {
  state = {
    openBurger: true,
  };

  burgerButton = () => {
    this.setState((prevState) => ({ openBurger: !prevState.openBurger }));
  };

  openMenu = () => {
    if (window.innerWidth > 768 && this.state.openBurger === false) {
      this.setState({ openBurger: true });
    }
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.openMenu);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.openMenu);
  };

  render() {
    const { openBurger } = this.state;
    const { userStep } = this.props;


    // FIXME passer arrat dans les props pour eviter repetition
    const steps = [
      "EventView",
      "GuestsList",
      "Budget",
      "House",
      "Preference",
      "ContactUs",
    ];

    const renderItem = (title, index) => {
      const { switchStep, userStep } = this.props;
      const number = index;
      return (
        <li
          id={`${number}`}
          className={userStep === number ? style.selected : style.unselected}
          onClick={() => switchStep(number)}
        >
          {title}
        </li>
      );
    };
    // DONE destructuring

    // DONE renderItem - reduire les repetitions
    return (
      <div>
        <div className={style.navTitle}>
          {steps[userStep]}
          <img
            alt=""
            src={openBurger ? close : Hamburger_icon}
            onClick={this.burgerButton}
            className={style.burgerButton}
          ></img>
        </div>
        <div className={style.nav}>
          <div>
            {openBurger ? (
              <div className={style.menu}>
                {steps.map(renderItem)}
                </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
