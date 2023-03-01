import Loader from 'react-loaders'
import './index.scss'
import AnimtedLetters from '../AnimtedLetters'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup,TileLayer } from 'react-leaflet'


const Contact = () => {

    const refForm = useRef()
   

        const sendEmail = (e) => {
            e.preventDefault();
        
          emailjs
        .sendForm(
            'service_od4213x',
            'template_fjqkzsc',
            refForm.current,
            'jMBV3HH8jcQvl2hlq',
        )
        .then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again.')
            }
        )
    };
    

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimtedLetters strArray={['C','o','n','t','a','c','t',' ','M','e']} 
                idx={15}
                />
                </h1>
                <p>
                    I am interested in flex-jobs opportunities.
                    <br />
                    keep in mind that I still need to go to school but <br/>
                     when I have hollidays I am most of the time avaible. <br  />
                     I live in Belguim, Limburg,  Bree and don't forget that I am very ambitious 
                     and always want to learn and work about coding projects!
                </p>
                <div className='contact-form'>
                    <form  ref={refForm} onSubmit={sendEmail}>
                        <ul>

                            <li className='half'>
                             <input type="text" name="name" placeholder="Name" required/>
                            </li>
                            <li className='half'>
                             <input type="email" name="email" placeholder="Email" required/>
                            </li>

                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>

                            <li>
                                <textarea placeholder="Message" name="message" required ></textarea>
                              
                            </li>
                                     
                            <li>
                             <input  className='flat-button' type="submit" value="SEND" />
                                                 
                            </li>

                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Lander Vanhout,
                <br />
                Belguim.
              
                <span>lander.vanhout@icloud.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[50.812877, 4.383545]} zoom={5} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[50.812877, 4.383545]}>
    <Popup>
      Lander lives in this country, come over for cup of coffee :)
    </Popup>
  </Marker>
</MapContainer>
            </div>
            <Loader type="pacman" />
        </div>
        </>
    );





}

export default Contact