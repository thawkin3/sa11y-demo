import React from 'react'

export const Button = ({ buttonText, onClick }) => (
  <button className="styledButton goodButton" onClick={onClick}>
    {buttonText}
  </button>
)
