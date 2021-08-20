import React from 'react'

export const Button = ({ buttonText, onClick }) => (
  <span className="styledButton badButton2" onClick={onClick}>
    {buttonText}
  </span>
)
