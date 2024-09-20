import './Contact.css';
import msg_icon from '../../assets/msg-icon.png';
import { SiFacebook, SiWhatsapp, SiGooglemaps } from "react-icons/si";import { IoMdClock } from "react-icons/io";



const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Envíanos un mensaje <img src={msg_icon} alt='Email Icon'/></h3>
        <p>No dudes en comunicarte con nosotros. Tus comentarios, preguntas y sugerencias son importantes para nosotros, ya que nos esforzamos por brindar un servicio excepcional en nuestro restaurante. Encuentra nuestra información de contacto a continuación.</p>
        <ul>
          <li><span className="facebook"><SiFacebook/></span>Restaurante La Posada</li>
          <li><span className="whatsapp"><SiWhatsapp/></span>+34 653 83 82 63</li>
          <li><span className="timer"><IoMdClock/></span>Jueves a Domingo: 13:00 - 16:00</li>
          <li><span className="googlemaps"><SiGooglemaps/></span>Calle Francisco Salzillo 22, Abanilla<br/> Murcia, 30640</li>
        </ul>
      </div>
      <div className='contact-col'>
      <iframe 
          className="google-map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.148176902746!2d-1.0436340843945726!3d38.20645639497786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6391c029d067a7%3A0x9b9ef112d993607a!2sCalle%20Francisco%20Salzillo%2C%2022%2C%2030640%20Abanilla%2C%20Murcia!5e0!3m2!1sen!2ses!4v1621701316369!5m2!1sen!2ses" 
          allowFullScreen 
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
