import React from "react";
import style from "./HomeSegment.module.css";

const HomeSegment = (props) => {
    const {titleSegment, imageSegment, textSegment} = props;
    return (
      <div className={style.container}>
        <div className={style.titleDescriptionSegment}>{titleSegment}</div>
        <img className={style.imageDescriptionSegment} src={imageSegment} alt="" />
        <div className={style.textDescriptionSegment}>{textSegment}</div>
        <div className={style.overlay}></div>
        <div className={style.btn}><p href="#"> View More </p></div>
      </div>
    );
  }


export default HomeSegment;
