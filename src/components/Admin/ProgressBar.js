import React from "react";
import style from "./ProgressBar.module.css";

const ProgressBar = (props) => {
    const { completed } = props;
  
    
  
    return (
      <div className={style.containerStyles}>
        <div className={style.fillerStyles} style={{width: `${completed}`}} >
          <span sclassNametyle={style.labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;