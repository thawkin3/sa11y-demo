import React, { useRef, useEffect } from 'react';
import FocusTrap from 'focus-trap-react';
import "./Modal.css";

export const Modal = ({ closeModal }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleEscapeKeyPress = e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <FocusTrap>
      <div>
        <div
          className="ModalOverlay"
          onClick={closeModal}
        />
        <div
          className="Modal"
          onKeyDown={handleEscapeKeyPress}
          aria-labelledby="modalTitle"
          role="dialog"
          aria-modal="true"
        >
          <button ref={buttonRef} onClick={closeModal} className="CloseX" aria-label="Close modal">
            X
          </button>
          <h1 id="modalTitle">Modal title here</h1>
          <p>Modal content here</p>
          <p>
            <a href="https://www.google.com/">Google</a> is great
          </p>
          <p>Modal content here</p>
          <p>Modal content here</p>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </FocusTrap>
  );
};
