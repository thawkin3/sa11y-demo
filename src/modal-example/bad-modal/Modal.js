import React from 'react'
import './Modal.css'

export const Modal = ({ closeModal }) => {
  return (
    <div className="Modal">
      <h2>Modal title here</h2>
      <p>Modal content here</p>
      <p>
        <a href="https://www.google.com/">Google</a> is great
      </p>
      <p>Modal content here</p>
      <p>Modal content here</p>
      <button onClick={closeModal}>Close</button>
    </div>
  )
}
