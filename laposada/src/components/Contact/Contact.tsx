import msgIcon from '../../assets/msg-icon.png'
import { SiFacebook, SiWhatsapp, SiGooglemaps } from 'react-icons/si'
import { IoMdClock } from 'react-icons/io'

const Contact = () => {
  return (
    <div
      id="Contacto"
      className="my-[80px] mx-auto max-w-[90%] flex justify-between flex-wrap max-[768px]:flex-col max-[768px]:items-center"
    >
      <div className="flex-[0_0_48%] text-[#676767] mb-5 max-[768px]:flex-[0_0_100%]">
        <h3 className="text-[#000f38] font-medium text-[25px] flex items-center mb-5">
          Envíanos un mensaje
          <img src={msgIcon} alt="Email Icon" className="w-[35px] ml-[10px]" />
        </h3>
        <p className="max-w-[450px]">
          No dudes en comunicarte con nosotros. Tus comentarios, preguntas y sugerencias son
          importantes para nosotros, ya que nos esforzamos por brindar un servicio excepcional en
          nuestro restaurante. Encuentra nuestra información de contacto a continuación.
        </p>
        <ul>
          <li className="flex items-center my-5">
            <a
              href="https://www.facebook.com/profile.php?id=100063636669626"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visita nuestra página de Facebook - Restaurante La Posada"
              className="flex items-center"
            >
              <span className="w-5 mr-[10px] text-[#1877f2] text-2xl">
                <SiFacebook />
              </span>
              Restaurante La Posada
            </a>
          </li>
          <li className="flex items-center my-5">
            <a
              href="https://wa.me/34653838263"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar un mensaje por WhatsApp al +34 653 83 82 63"
              className="flex items-center"
            >
              <span className="w-5 mr-[10px] text-[#25d366] text-2xl">
                <SiWhatsapp />
              </span>
              +34 653 83 82 63
            </a>
          </li>
          <li className="flex items-center my-5">
            <span className="w-5 mr-[10px] text-[#181716] text-2xl">
              <IoMdClock />
            </span>
            Jueves a Domingo: 13:00 - 16:00
          </li>
          <li className="flex items-center my-5">
            <a
              href="https://maps.app.goo.gl/WQLMBdXU3pHkZJ8h7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver la ubicación en Google Maps - Calle Francisco Salzillo 22, Abanilla, Murcia"
              className="flex items-center"
            >
              <span className="w-5 mr-[10px] text-[#db4437] text-2xl">
                <SiGooglemaps />
              </span>
              Calle Francisco Salzillo 22, Abanilla
              <br /> Murcia, 30640
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-[0_0_48%] mb-5 max-[768px]:flex-[0_0_100%]">
        <iframe
          className="border-0 w-full h-[300px] mt-5"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3135.148176902746!2d-1.0436340843945726!3d38.20645639497786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6391c029d067a7%3A0x9b9ef112d993607a!2sCalle%20Francisco%20Salzillo%2C%2022%2C%2030640%20Abanilla%2C%20Murcia!5e0!3m2!1sen!2ses!4v1621701316369!5m2!1sen!2ses"
          allowFullScreen
          title="Google Map"
        />
      </div>
    </div>
  )
}

export default Contact
