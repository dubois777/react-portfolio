import './index.scss'
import Loader from 'react-loaders'
import AnimtedLetters from '../AnimtedLetters'
import TagCloud from 'TagCloud'
import { useActionData } from 'react-router-dom'
import { useEffect } from 'react'



const Skills =() => {

    useEffect(() => {
return() => {
    const container = ".tagcloud";
    const texts=[  
        " .",
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "4 aso Latin",
        "Football",
        "Gamer",
        "....",
    ];

    const options ={
        radius:300,
        maxSpeed: "fast",
        initSpeed: "fast",
        keep: true,
    };

    TagCloud(container, texts, options);
};
  

    }, []);
    

      


    return(
        <>

        <div className="text-shpere">
            <span className="tagcloud"></span>
        </div>
        
        <div className='container skills-page'>
      
            <Loader type="pacman" />
       
            <div className='text-zone'>
                <h1>
                    <AnimtedLetters strArray={['W','h','a','t', ' ','A','r','e',' ','M','y',' ', 'Skills', '?']}
                    idx={15} />
                </h1>
                        <p>
                            I can speak English and Dutch pretty well. <br/>
                            Obviously is Dutch my native language but because I live in Belguim,<br />
                            Am I aslo learning French and German in school. <br />
                            Below you can see what else I can do.
                        </p>

             </div>
             </div>

       
             
                </>
                )
            
    
}

export default Skills