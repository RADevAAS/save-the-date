import React, { Component } from "react";
import Loader from "react-loader-spinner";
import style from "./Loaders.module.css";
import PropTypes from "prop-types";


export class RingsLoader extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };
  
  render() {
    if (!this.props.loader) {
      return null;
    }
    return (
      <div className={style.background}>
        <div>
          <Loader
            type="Rings"
            visible
            color="#00BFFF"
            height={100}
            width={100}
          />
        </div>
      </div>
    );
  }
}

RingsLoader.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default RingsLoader;
