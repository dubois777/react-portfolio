import './index.scss'
import AnimtedLetters from '../AnimtedLetters'
import { useEffect, useState } from 'react'
import {letterClass} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'


const About = () => {

    const About = () => {
        const [letterClass, setLetterClass]= useState('text-animate')

        useEffect(() =>{
            return setTimeout(() => {
                setLetterClass('text-animate-hover')
            }, 3000)
        }, [])


      

    }
    return(
        <div className="container about-page">
            <>
            <Loader type="pacman" />
            </>
        <div className="text-zone">
            <div className="text-zone">
                </div>

                <div className='stage-cube-cont'> 
                <div className='cubespinner'>
                    <div className='face1'>
                       <FontAwesomeIcon icon={faAngular} color="#dd0031" />
                    </div>

                    <div className='face2'>
                       <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                    </div>

                    <div className='face3'>
                       <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>

                    <div className='face4'>
                       <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>

                    <div className='face5'>
                       <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>

                    <div className='face6'>
                       <FontAwesomeIcon icon={faGitAlt} color="#EC428" />
                    </div>
                    </div>   
                </div>
            <h1>
                <AnimtedLetters
                letterClass={letterClass}
                strArray={['A','B','O','U','T', ' ', 'M', 'E']}
                inx={15}
                />
            </h1>
            <p>I'm a very ambitious person who wants to become a front-end developer that's
                 looking for a side hustle
                for people who need me.
            </p>
            <p>
                I am turning 16 this year! I like to play 
                football
                 and I live in Belguim which makes that if<br />
                you want to hire me it can take a little bit 
                longer than others because I still need to go to school 
                unfortunely.
            </p>
            <p>
                I already look forward to work with you!
            </p>
        </div>
        </div>
        
        
    )

 
}

export default About