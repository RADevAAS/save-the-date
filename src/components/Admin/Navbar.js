import React, { Component } from "react";
import style from "./AdminPage.module.css";
import Hamburger_icon from "../../assets/images/Hamburger_icon.png";
import close from "../../assets/images/close.png";
import Steps from "./AdminTabs"


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

  renderItem = (tab, index) => {
    const { switchStep, userStep } = this.props;
    const number = index;
    return (
        <li
            id={`${number}`}
            className={userStep === number ? style.selected : style.unselected}
            onClick={() => switchStep(number)}
        >
          {tab.text}
        </li>
    );
  };

  render() {
    const { openBurger } = this.state;
    const { userStep } = this.props;

    // DONE destructuring

    // DONE renderItem - reduire les repetitions
    return (
      <div>
        <div className={style.navTitle}>
          <div className={style.textNavTitle}>{Steps[userStep].text}</div>
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
                {Steps.map(this.renderItem)}
                </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
