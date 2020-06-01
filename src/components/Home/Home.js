import React, { Component } from "react";
import style from "./Home.module.css";
import homeimg1 from "../../data/homeimg1.jpg";
import homeimg2 from "../../data/homeimg2.jpg";
import homeimg3 from "../../data/homeimg3.jpg";

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
            <div>descriptionTitle1</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg1}
              alt="Whatever description1"
            ></img>
            <div>faite quelques de ouf avec notre site bla bla bla1</div>
          </div>
          <div className={style.descriptionSegment}>
            <div>descriptionTitle2</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg2}
              alt="Whatever description2"
            ></img>
            <div>faite quelques de ouf avec notre site bla bla bla2</div>
          </div>
          <div className={style.descriptionSegment}>
            <div>descriptionTitle3</div>
            <img
              className={style.imageDescriptionSegment}
              src={homeimg3} 
              alt="Whatever description3"
            ></img>
            <div>faite quelques de ouf avec notre site bla bla bla3</div>
          </div>
        </div>
        <button className={style.button}> Contact us</button>
      </div>
    );
  }
}

export default Home;
