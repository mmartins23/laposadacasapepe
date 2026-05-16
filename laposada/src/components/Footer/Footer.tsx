import { FaFacebookSquare, FaInstagramSquare, FaTripadvisor } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="text-center py-5 bg-[#f8f8f8]">
      <div className="flex justify-center mb-[10px]">
        <a
          href="https://www.facebook.com/p/Restaurante-La-Posada-100063636669626/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-[10px] text-[#676767] text-2xl transition-colors duration-300 hover:text-[#1877f2]"
          aria-label="Visita nuestra página de Facebook - Restaurante La Posada"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.instagram.com/laposadacasapepe/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-[10px] text-[#676767] text-2xl transition-colors duration-300 hover:text-[#e1306c]"
          aria-label="Visita nuestra cuenta de Instagram - La Posada Casa Pepe"
        >
          <FaInstagramSquare />
        </a>
        <a
          href="https://www.tripadvisor.es/Restaurant_Review-g2102293-d6681221-Reviews-La_Posada-Abanilla.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-[10px] text-[#676767] text-2xl transition-colors duration-300 hover:text-[#00B300]"
          aria-label="Ver opiniones en TripAdvisor - Restaurante La Posada"
        >
          <FaTripadvisor />
        </a>
      </div>
      <p>© {currentYear} Copyright La Posada Casa Pepe. All Rights Reserved</p>
    </div>
  )
}

export default Footer
