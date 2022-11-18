import React from 'react'
import './button.css'
// button componentnt

// used with text and onClick props
function Button({text,onClick}) {
  return (
    <div className='btn' onClick={()=>onClick()}>
      
      {text}
    </div>
  )
}

export default Button
