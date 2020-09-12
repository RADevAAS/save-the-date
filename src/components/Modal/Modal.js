import React, { Component } from "react"
import style from "./Modal.module.css"
import PropTypes from "prop-types"
import ReactModal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  onClick = (e) => {
    this.props.onClick && this.props.onClick(e);
  };

  onAfterOpen = (e) => {
    this.props.onAfterOpen && this.props.onAfterOpen(e);
  };

  render() {
    const { show } = this.props

    return (
      <ReactModal
          isOpen={show}
          onAfterOpen={this.onAfterOpen}
          onRequestClose={this.onClose}
          style={customStyles}
      >
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
      </ReactModal>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};

export default Modal;
