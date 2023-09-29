"use client"
import React from 'react'

const Button = ({price}) => {
  return (
    <div>
      <button onClick={()=>alert(price )}>Check price</button>
    </div>
  )
}

export default Button
