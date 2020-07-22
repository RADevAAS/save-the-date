import React, { Component } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";

import homeimg1 from "../../assets/images/homeimg1.jpg";
import homeimg2 from "../../assets/images/homeimg2.jpg";
import homeimg3 from "../../assets/images/homeimg3.jpg";
import HomeModal from "../HomeModal/HomeModal";

import lang from "../../assets/mock/langSelector";
import HomeSegment from "./HomeSegment/HomeSegment";

const {
  title,
  description,
  img1Title,
  img2Title,
  img3Title,
  img1Desc,
  img2Desc,
  img3Desc,
} = lang.lang;

export class Home extends Component {
  state = {
    show: false,
    modalTitle: "ON IRA ou tu voudra quand tu voudra",
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        <div className={style.background}>
          <Link to={`/login`}>
            <button className={style.loginButton}>Login</button>
          </Link>

          <h1>{title}</h1>
          <div className={style.presentation}>
            <h2>{description}</h2>
          </div>

          <HomeModal
            onClose={this.hideModal}
            onClick={this.hideModal}
            show={this.state.show}
            modalTitle={this.state.modalTitle}
          />

          <div className={style.description}>
            <div onClick={this.showModal}>
              <HomeSegment
                titleSegment={img1Title}
                imageSegment={homeimg1}
                textSegment={img1Desc}
              />
            </div>

            <div onClick={this.showModal}>
              <HomeSegment
                titleSegment={img2Title}
                imageSegment={homeimg2}
                textSegment={img2Desc}
              />
            </div>

            <div onClick={this.showModal}>
              <HomeSegment
                titleSegment={img3Title}
                imageSegment={homeimg3}
                textSegment={img3Desc}
              />
            </div>
          </div>

          <Link to={`/contactus`}>
            <button className={style.button}> Contact us</button>
          </Link>
        </div>
      </main>
    );
  }
}

export default Home;

//https://alligator.io/react/modal-component/
//https://codepen.io/vlrprbttst/pen/xOoxWo
//https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_close
//https://codepen.io/designcouch/pen/obvKxm
