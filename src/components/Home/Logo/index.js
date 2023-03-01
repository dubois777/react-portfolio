import './index.scss';
import LogoS from '../../../assets/images/Alphabet-L-Transparent-File.png'
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import { DrawSVGPlugin } from 'gsap-trial/all';


const Logo = () => {

const bgRef = useRef()
const outlineLogoRef = useRef()
const solidLogoRef = useRef()
    
useEffect(() =>{
    gsap.registerPlugin(DrawSVGPlugin)

    gsap.timeline()
    toString(bgRef.current, {
        duration: 1,
        opacity: 1,
    })
}, [])
return (
        <div className='logo-container' ref={bgRef}>
           
            <img ref={solidLogoRef}  className='solid-logo' src={LogoS} alt="L" />
            <svg
            width="559pt"
            height="897pt"
            version="1.0"
            viewBox="0 0559 897"
           >
            <g
            transform="translate(0 457) scale(.1-.1)"
            fill="none"
            >
            </g>
           
           </svg>
        </div>
    )
}

export default Logo