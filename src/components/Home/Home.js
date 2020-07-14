import React, { Component } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import lang from "../../assets/mock/langSelector";

import homeimg1 from "../../assets/images/homeimg1.jpg";
import homeimg2 from "../../assets/images/homeimg2.jpg";
import homeimg3 from "../../assets/images/homeimg3.jpg";
import Modal from "../Modal/Modal";

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
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    /* const imgTitle = [img1Title, img2Title, img3Title];
    const homeImg = [homeimg1, homeimg2, homeimg3];
    const imgDesc = [img1Desc, img2Desc, img3Desc];

    //FIXME je sais pas trop comment faire
    const renderDescriptionSegment = () => {
      return (
        <div className={style.descriptionSegment}>
          <div className={style.titleDescriptionSegment}>{imgTitle.map}</div>
          <img
            className={style.imageDescriptionSegment}
            src={homeImg.map}
            alt=""
          />
          <div className={style.textDescriptionSegment}>{imgDesc.map}</div>
        </div>
      );
    };
*/
    // DONE export DescriptionSegment to component/function renderDescriptionSegment
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
          
          <Modal
            onClose={this.hideModal}
            onClick={this.hideModal}
            show={this.state.show}
            modalTitle={this.state.modalTitle}
          />

          <div className={style.description}>
            <div className={style.descriptionSegment} onClick={this.showModal}>
              <div className={style.titleDescriptionSegment}>{img1Title}</div>
              <img
                className={style.imageDescriptionSegment}
                src={homeimg1}
                alt=""
              />
              <div className={style.textDescriptionSegment}>{img1Desc}</div>
            </div>
            <div className={style.descriptionSegment} onClick={this.showModal}>
              <div className={style.titleDescriptionSegment}>{img2Title}</div>
              <img
                className={style.imageDescriptionSegment}
                src={homeimg2}
                alt=""
              />
              <div className={style.textDescriptionSegment}>{img2Desc}</div>
            </div>
            <div className={style.descriptionSegment} onClick={this.showModal}>
              <div className={style.titleDescriptionSegment}>{img3Title}</div>
              <img
                className={style.imageDescriptionSegment}
                src={homeimg3}
                alt=""
              />
              <div className={style.textDescriptionSegment}>{img3Desc}</div>
            </div>{" "}
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
