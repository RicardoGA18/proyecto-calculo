import React from 'react'
import clsx from 'clsx'

const TextField = ({label,placeholder=" ",error,helperText,className,hidden,...props}) => {
  return (
    <label className={clsx("TextField",error && "w-error",hidden && "hidden")}>
      <input {...props} placeholder={placeholder} className="f-body"/>
      <span className={clsx("f-body label",className)}>{label}</span>
      {error && <span className="error f-small-b">{helperText}</span>}
    </label>
  )
}

export default TextField
