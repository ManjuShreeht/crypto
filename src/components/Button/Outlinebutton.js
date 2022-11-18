import React from 'react'
import './button.css'

//same as a button but use outline
//remove the background color and add bg to hover effect
function Outlinebutton({text,onClick}) {
    return (
        <div className='outline' onClick={()=>onClick()}>
          {text}
        </div>
      )
    }
    


export default Outlinebutton

