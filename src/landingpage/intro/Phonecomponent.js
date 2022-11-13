
import React from 'react'
import './intro.css'
import gradient from '../../assets/gradient.png';
import iphone from '../../assets/iphone.png';
import { height } from '@mui/system';
import {motion} from 'framer-motion'

function Phonecomponent() {
  return (
    <div  className="phonebox">
        <img className="gradient"  style={{width:"250px",minWidth:"100px", height:"420px"}}src={gradient} alt="img" />
        <motion.img  className="iphone" initial={{y:-10}} animate={{y:10}} transition={{type:"smooth", repeatType:"mirror",duration:2 ,repeat:Infinity}} 
          src={iphone} alt="img" />
      
    </div>
  )
}

export default Phonecomponent
