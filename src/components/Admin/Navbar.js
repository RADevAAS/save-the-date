import React, { Component } from "react";
import style from "./AdminPage.module.css";
import Hamburger_icon from "../../data/Hamburger_icon.png";
import close from "../../data/close.png";

class Navbar extends Component {
  state = {
    openBurger: true,
  };

  burgerButton = () => {
    this.setState((prevState) => ({ openBurger: !prevState.openBurger }));
  };

  openMenu = () => {
    if (window.innerWidth > 768 && this.state.openBurger === false) {
      this.setState(() => ({ openBurger: true }));
    }
  };

  componentDidMount= () => {
    window.addEventListener("resize", this.updateDimensions);
    if (window.innerWidth > 768 && this.state.openBurger === false) {
      this.setState(() => ({ openBurger: true }));
    }
  }

  updateDimensions= () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  navTitle(userStep) {
    switch (userStep) {
      case 1:
        return <div>EventView</div>;
      case 2:
        return <div>GuestsList</div>;
      case 3:
        return <div>Budget</div>;
      case 4:
        return <div>House</div>;
      case 5:
        return <div>Preference</div>;
      case 6:
        return <div>ContactUs</div>;
      default:
        return <div>Navbar</div>;
    }
  }

  render() {
    const { switchStep, userStep } = this.props;
    const openBurger = this.state.openBurger;

    return (
      <div>
        <div className={style.navTitle}>
          {this.navTitle(userStep)}
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
                <li
                  id="1"
                  className={userStep === 1 ? style.selected : style.unselected}
                  onClick={() => switchStep(1)}
                >
                  Event View
                </li>
                <li
                  id="2"
                  className={userStep === 2 ? style.selected : style.unselected}
                  onClick={() => switchStep(2)}
                >
                  Guests List
                </li>
                <li
                  id="3"
                  className={userStep === 3 ? style.selected : style.unselected}
                  onClick={() => switchStep(3)}
                >
                  Budget
                </li>
                <li
                  id="4"
                  className={userStep === 4 ? style.selected : style.unselected}
                  onClick={() => switchStep(4)}
                >
                  House
                </li>
                <li
                  id="5"
                  className={userStep === 5 ? style.selected : style.unselected}
                  onClick={() => switchStep(5)}
                >
                  Preferences
                </li>
                <li
                  id="6"
                  className={userStep === 6 ? style.selected : style.unselected}
                  onClick={() => switchStep(6)}
                >
                  Contact Us
                </li>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
