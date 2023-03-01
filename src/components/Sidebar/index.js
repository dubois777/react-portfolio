import './index.scss'
import { Link,NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/Alphabet-L-Transparent-File.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,  faHome, faUser  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'



const Sidebar = () => <>
<div className="nav-bar">
   <Link className="logo" to="/">
    <img src={LogoS} alt="logo" />
   
   </Link>
   <nav>
    <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>

    <NavLink exact="true" activeclassname="active" className="about-link" to="about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>


    <NavLink exact="true" activeclassname="active" className="contact-link" to="contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>

    
    <NavLink exact="true" activeclassname="active" className="skills-link" to="skills">
        <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
    </NavLink>

    
    
    <NavLink exact="true" activeclassname="active" className="work-link" to="work">
        <FontAwesomeIcon icon={faEye} color="#4d4d4e" />
    </NavLink>

   </nav>
<ul>
    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/lander-vanhout-366554267/" />
        <FontAwesomeIcon icon={faLinkedinIn} color="#4d4d4e" />
    </li>
</ul>

    </div>
    </>

export default Sidebar