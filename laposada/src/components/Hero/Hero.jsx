import { MdMenuBook } from "react-icons/md";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero container' id="Hero">
      <div className='hero-text'>
        <h1>La Posada Casa Pepe</h1>
        <p>Desde 1846, elaborando comida casera con los más altos estándares de calidad.</p>
        <button className='btn carta-btn'>Nuestra Carta<MdMenuBook /></button>
        <button className='btn reserva-btn'>Reserva Mesa<MdOutlineArrowCircleRight /></button>
      </div>
    </div>
  )
}

export default Hero;