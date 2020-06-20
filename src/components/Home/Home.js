import React, { Component } from "react";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import homeTextFr from "../../assets/mock/homeTextFr";

import homeimg1 from "../../assets/images/homeimg1.jpg";
import homeimg2 from "../../assets/images/homeimg2.jpg";
import homeimg3 from "../../assets/images/homeimg3.jpg";

const {
  title,
  description,
  img1Title,
  img2Title,
  img3Title,
  img1Desc,
  img2Desc,
  img3Desc,
} = homeTextFr;

export class Home extends Component {
  render() {
    return (
      <div className={style.background}>
        <Link to={`/login`}>
          <button className={style.loginButton}>Login</button>
        </Link>

        <div className={style.title}>{title}</div>

        <div className={style.presentation}>{description}</div>

        <div className={style.description}>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>{img1Title}</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg1}
              alt="Whatever description1"
            ></img>
            <div className={style.textDescriptionSegment}>{img1Desc} </div>
          </div>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>{img2Title}</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg2}
              alt="Whatever description2"
            ></img>
            <div className={style.textDescriptionSegment}>{img2Desc} </div>
          </div>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>{img3Title}</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg3}
              alt="Whatever description3"
            ></img>
            <div className={style.textDescriptionSegment}>{img3Desc} </div>
          </div>
        </div>

        <Link to={`/contactus`}>
          <button className={style.button}> Contact us</button>
        </Link>
      </div>
    );
  }
}

export default Home;
