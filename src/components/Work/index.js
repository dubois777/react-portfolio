import './index.scss'
import Youtube from '../../assets/images/YouTube-logo-pc-2-600x314.png'
import Google from '../../assets/images/googlelogo_color_160x56dp.png'
import Sky from '../../assets/images/889b86dfb255824f611c12f367f69cb6.png'
import { useState,letterClass,setLetterClass,useEffect } from 'react'
import { motion } from 'framer-motion'

const Work = () =>{


    
    
          
   

return(
        <>
        <div className='container work-page'>
            <div className='text-zone'>
               
                <div className='i1'>
                    <motion.div  animate={{opacity: 1 }} ></motion.div>
                    <a target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
                <img src={Youtube} href="YouTube-logo-pc-2-600x314.png" className='P1'  />
                </a>
                </div>
                

                <div className='i2'>
                
                    <a target= '_blank' href="https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8">
                    <img src={Google} href="googlelogo_color_160x56dp.png" className='P2' />
                      </a>
            
                </div>

                <div className='i3'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target='_blank' href="https://www.youtube.com/watch?v=mJlUtylhYPc">
                        <img src={Sky} href="889b86dfb255824f611c12f367f69cb6.png" className='P3'/>
                    </a>
                    </motion.div>
                </div>

                <div className='i4'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
                <img src={Youtube} href="YouTube-logo-pc-2-600x314.png" className='P4' Link to =" https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                </a>
                </motion.div>
                </div>
                

                <div className='i5'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target= '_blank' href="https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8">
                    <img src={Google} href="googlelogo_color_160x56dp.png" className='P5' />
                      </a>
                      </motion.div>
                </div>

                <div className='i6'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target='_blank' href="https://www.youtube.com/watch?v=mJlUtylhYPc">
                        <img src={Sky} href="889b86dfb255824f611c12f367f69cb6.png" className='P6'/>
                    </a>
                    </motion.div>
                </div> 
                
                <div className='i7'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target='_blank' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" >
                <img src={Youtube} href="YouTube-logo-pc-2-600x314.png" className='P7' Link to =" https://www.youtube.com/watch?v=dQw4w9WgXcQ"/>
                </a>
                </motion.div>
                </div>
                

                <div className='i8'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target= '_blank' href="https://www.google.com/search?client=opera-gx&q=google&sourceid=opera&ie=UTF-8&oe=UTF-8">
                    <img src={Google} href="googlelogo_color_160x56dp.png" className='P8' />
                      </a>

                      </motion.div>
                </div>

                <div className='i9'>
                <motion.div  animate={{opacity: 1, scale:1}} initial={{ opacity: 0, scale: 0}} exit={{opacity: 0,}}
                transition={{duration: 0.5}}>
                    <a target='_blank' href="https://www.youtube.com/watch?v=mJlUtylhYPc">
                        <img src={Sky} href="889b86dfb255824f611c12f367f69cb6.png" className='P9'/>
                    </a>
                    </motion.div>
                </div>
                </div>
                
               
</div>


   
        
        </>
)
}


export default Work
