import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Alphabet-L-Transparent-File.png';
import AnimtedLetters from '../AnimtedLetters';
import {  useState, useEffect } from 'react';
import Logo from '../Home/Logo';
import Loader from 'react-loaders';
const Home = () => {
  const [letterClass, setLetterClass  ] = useState('text-animte')
  const nameArray = ['a', 'n', 'd', 'e', 'r',',']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r',]
 

  return( 
        <div className="container home-page"> 
        <Loader type = "pacman" />
      
        <div className="text-zone">
<h1>
  <span className={letterClass}>H</span>
  <span className={`${letterClass}  _12 ` }>i,</span>
   <br /> 
   <span className={`${letterClass}  _13 ` }>I</span>
   <span className={`${letterClass}  _14 ` }>'m</span>
<img src={LogoTitle}alt="developer" />
<AnimtedLetters letterClass={letterClass}
strArray={nameArray}
idx={15} />
<br />
<AnimtedLetters letterClass={letterClass}
strArray={jobArray}
idx={22} /></h1>
<h2>Front-end Developer / football player / student</h2>
<Link to="contact" className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
        </div>
    );
} 

export default Home