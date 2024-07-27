import React from 'react'

const Input = ({label,type,onchange,value}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>

        <input type={type} 
        value={value} 
        onChange={onchange} />
    </div>
  )
}

export default Input
