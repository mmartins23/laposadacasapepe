import { MdMenuBook } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import LaPosadaMenu from '../../assets/laPosadaMenu.pdf'
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container' id="Hero">
      <div className='hero-text'>
        <h1>La Posada Casa Pepe</h1>
        <p>Desde 1846, elaborando comida casera con los más altos estándares de calidad.</p>
        <a href={LaPosadaMenu} target="_blank" rel="noopener noreferrer">
          <button className='btn carta-btn'>
            Nuestra Carta<MdMenuBook />
          </button>
        </a>
        <a href="https://wa.me/34653838263" target="_blank" rel="noopener noreferrer">
          <button className='btn reserva-btn'>
            Reserva Mesa<MdOutlineArrowCircleRight />
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero;
