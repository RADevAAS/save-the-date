import React, { Component } from "react";
import style from "./Home.module.css";
import homeimg1 from "../../data/homeimg1.jpg";
import homeimg2 from "../../data/homeimg2.jpg";
import homeimg3 from "../../data/homeimg3.jpg";
import { Link } from "react-router-dom";
import homeTextFr from "../../data/homeTextFr";

import homeimg1 from "../../data/homeimg1.jpg";
import homeimg2 from "../../data/homeimg2.jpg";
import homeimg3 from "../../data/homeimg3.jpg";

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
      <div className={style.wrapper}>
        <div className={style.title}>SAVE THE DATE</div>

        <div className={style.presentation}>
          description description description description description
          description description description description description
          description description
        </div>

        <div className={style.description}>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>descriptionTitle1</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg1}
              alt="Whatever description1"
            ></img>
            <div className={style.textDescriptionSegment}>faite quelques de ouf avec notre site bla bla bla1</div>
          </div>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>descriptionTitle2</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg2}
              alt="Whatever description2"
            ></img>
            <div className={style.textDescriptionSegment}>faite quelques de ouf avec notre site bla bla bla2</div>
          </div>
          <div className={style.descriptionSegment}>
            <div className={style.titleDescriptionSegment}>descriptionTitle3</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg3}
              alt="Whatever description3"
            ></img>
            <div className={style.textDescriptionSegment}>faite quelques de ouf avec notre site bla bla bla3</div>
          </div>
        </div>

        <button className={style.button}> Contact us</button>

      </div>
    );
  }
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
