import React from "react";
import Loader from "react-loader-spinner";
import style from "./Loaders.module.css";

// DONE make generic Loader mais ya un petit probleme au niveua du type
export const NewLoader = (type, mensuration) =>  {
  
    return (
      <div className={style.background}>
        <div>
          <Loader
            type={type}
            visible
            color="var(--blue)"
            height width ={mensuration}
          />
        </div>
      </div>
    );
  }


export default NewLoader;
