"use client"

import Script from 'next/script'
import React from 'react'



// Using this third party js code in our different nextjs components
const page = () => {
  return (
    <div>
      <h1>Get user location here</h1>
      <Script
      src='/location.js'
    onLoad={()=>{
        console.log("file loaded")
    }}

      />
    </div>
  )
}

export default page
