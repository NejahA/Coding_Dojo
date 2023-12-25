import React, { useState } from 'react'
import "./DisplayBox.css"

const DisplayBox = (props) => {
    const {allColors} = props
  return (
    <div className='container'>
        
    {allColors.map( (color) =>  <div className='box' style={{width: color.width+"px", height:color.height+"px", backgroundColor: color.color }}></div> )}
    </div>
  )
}

export default DisplayBox