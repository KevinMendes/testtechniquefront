import React from 'react';
const Modal = ({ handleClose, show, children }) => {
    const hiddingClass = show ? "modal display-block" : "modal display-none";
    return (
        <div className={hiddingClass}>
            <div className="modal-wrap">
                {children}
                <button className="white-button" onCLick={handleClose}>Cancel</button>
                <button className="blue-button" onClick={handleClose}>OK</button>
            </div>
        </div>
    );
};

export default Modal;