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
    const imgTitle = [img1Title, img2Title, img3Title];
    const homeImg = [homeimg1, homeimg2, homeimg3];
    const imgDesc = [img1Desc, img2Desc, img3Desc];
    const descriptionSegment = [0, 1, 2];
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

    // DONE export DescriptionSegment to component/function renderDescriptionSegment
    return (
      <div className={style.background}>
        <Link to={`/login`}>
          <button className={style.loginButton}>Login</button>
        </Link>

        <div className={style.title}>{title}</div>

        <div className={style.presentation}>{description}</div>

        <div className={style.description}>
          {descriptionSegment.map((key) => renderDescriptionSegment(key))}
        </div>

        <Link to={`/contactus`}>
          <button className={style.button}> Contact us</button>
        </Link>
      </div>
    );
  }
}

export default Home;
