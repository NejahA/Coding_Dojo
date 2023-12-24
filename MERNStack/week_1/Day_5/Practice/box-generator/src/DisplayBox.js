import React, { useState } from 'react'
import "./DisplayBox.css"

const DisplayBox = (props) => {
    const {allColors} = props
  return (
    <div className='container'>
        
    {allColors.map( (color) =>  <div className='box' style={{width: "200px", height:"200px", backgroundColor: color }}></div> )}
    </div>
  )
}

export default DisplayBox