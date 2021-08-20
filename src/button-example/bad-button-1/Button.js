import React from 'react'

export const Button = ({ buttonText, onClick }) => (
  <a className="styledButton badButton1" href="#" onClick={onClick}>
    {buttonText}
  </a>
)
