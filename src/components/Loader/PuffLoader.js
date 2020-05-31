import React, { Component } from "react";
import Loader from "react-loader-spinner";
import style from "./Loaders.module.css";

export class PuffLoader extends Component {
  render() {
    return (
      <div className={style.background}>
        <div>
          <Loader
            type="Puff"
            visible
            color="var(--blue)"
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  }
}

export default PuffLoader;
