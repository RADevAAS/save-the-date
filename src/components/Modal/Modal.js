import React, { Component } from "react";
import style from "./Modal.module.css";
import PropTypes from "prop-types";

export class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className={style.modal} id="modal">
        <div className={style.modalTitle}>{this.props.modalTitle}</div>
        <div className={style.content}>{this.props.children}</div>
        <div className={style.actions}>
          <button className={style.toggleButton} onClick={this.onClick}>
            Confirm
          </button>
          <button className={style.toggleButton} onClick={this.onClose}>
            Not Yet
          </button>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
