import { MdMenuBook, MdOutlineArrowCircleRight } from 'react-icons/md'
import bgImage from '../../assets/laposada_background.jpeg'
import laPosadaMenu from '../../assets/laPosadaMenu.pdf'

const Hero = () => {
  return (
    <div
      id="Hero"
      className="w-full min-h-screen text-white flex items-center justify-center"
      style={{
        background: `linear-gradient(rgba(22,22,22,0.5), rgba(22,22,22,0.5)), url(${bgImage}) center center/cover no-repeat scroll`,
      }}
    >
      <div className="text-center max-w-[800px] flex flex-col items-center">
        <h1 className="text-[60px] font-semibold max-[768px]:text-[40px]">La Posada Casa Pepe</h1>
        <p className="max-w-[700px] mt-[10px] mb-[20px] leading-snug">
          Desde 1846, elaborando comida casera con los más altos estándares de calidad.
        </p>
        <a href={laPosadaMenu} target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-primary text-[#212121] uppercase px-[25px] py-[14px] text-base rounded-[30px] border-0 cursor-pointer mb-[10px] transition-all duration-300 hover:text-white hover:bg-transparent hover:border hover:border-primary">
            Nuestra Carta
            <MdMenuBook />
          </button>
        </a>
        <a href="https://wa.me/34653838263" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-2 bg-secondary text-[#212121] uppercase px-[25px] py-[14px] text-base rounded-[30px] border-0 cursor-pointer transition-all duration-300 hover:text-white hover:bg-transparent hover:border hover:border-secondary">
            Reserva Mesa
            <MdOutlineArrowCircleRight />
          </button>
        </a>
      </div>
    </div>
  )
}

export default Hero
