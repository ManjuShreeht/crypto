import React from 'react'

import Button from '../../components/Button/Button'
import Outlinebutton from '../../components/Button/Outlinebutton'
import './information.css'
import {motion} from 'framer-motion'
import Phonecomponent from '../../components/Landingpage/Phonecomponent'

//use framer motion animation to design a content
//framer.com/docs/animation

function Infromation() {
    return (
        <div className='wrapper'>
            <div className='info'>
            {/* animation use motion.div or html tag ,itnitial where to start x-axis or y-axis ,up(-) or down(+) ,
            animate end position where to sit ,transition --duration of animate ,delay */}
                <motion.h1 className='bigheading1' initial={{x:-50}} animate={{x:0}}
                transition={{duration:0.9}}>Track Crypto</motion.h1>
                <motion.h1 className='bigheading2'
                initial={{y:50,opacity:0}} 
                animate={{y:0,opacity:1}}
                transition={{duration:0.5,delay:0.25}}> Real Time.</motion.h1>
                <motion.p className='para' initial={{y:50,opacity:0}} 
                animate={{y:0,opacity:1}}
                transition={{duration:0.5,delay:0.75}}   >Track crypo through a public api in real time. Visit the dashboard to do so!</motion.p>
                <motion.div className='info_btn'  initial={{x:50,opacity:0,rotateZ:90}} 
                whileInView={{x:0,opacity:1,rotateZ:0}}
                transition={{duration:0.5,delay:0.25}}>
                   <Button text="dashboard"/>
                   <Outlinebutton  text="share"/>
                </motion.div>
            </div>
            <div className='phone'>
                {/* phone image design right side ,created seperatelly phone compnent and used */}
                <Phonecomponent />             
    
            </div>
          
        </div>
      )
}

export default Infromation
