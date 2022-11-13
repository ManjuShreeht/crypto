import React from 'react'
import './button.css'

function Outlinebutton({text,onClick}) {
    return (
        <div className='outline' onClick={()=>onClick()}>
          {text}
        </div>
      )
    }
    


export default Outlinebutton

