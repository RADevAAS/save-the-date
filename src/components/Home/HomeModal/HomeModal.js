import React from "react";
//import style from "./HomeModal.module.css";
//import PropTypes from "prop-types";

const HomeModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

export default HomeModal;