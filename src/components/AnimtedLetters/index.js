import './index.scss';
import home from '../Home';
import AnimatedLetters from '../AnimtedLetters'

const AnimtedLetters = ({ letterClass, strArray, idx }) => {
return(
    <span>
         {
            strArray.map((char, i) =>(
                <span key={char + i} className={ `${letterClass} _${i + idx}`}>
                    {char}

                </span>
                    ))
         }
    </span>
)
};
export default AnimtedLetters