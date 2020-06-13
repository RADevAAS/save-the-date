import React from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = (props) => {
    const { completed } = props;
  
    
  
    return (
      <div className={style.container}>
        <div className={style.filler} style={{width: `${completed}`}} >
          <span className={style.label}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;