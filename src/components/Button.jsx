import React from 'react'

const Button = ({children,...props}) => {
  return (
    <button {...props} className="Button f-subtitle2">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </button>
  )
}

export default Button
