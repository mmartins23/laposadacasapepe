import './News.css';
import news_1 from '../../assets/laposada_jamon.jpg';
import news_2 from '../../assets/laposada_paella.jpg';
import news_3 from '../../assets/laposada_meat.jpg';
import { GiMeat, GiChickenOven, GiForkKnifeSpoon } from "react-icons/gi";


const News = () => {
  return (
    <div className='news'>
      <div className='new'>
        <img src={news_1} alt='Jamon Serrano' />
        <div className='caption'>
          <span><GiMeat size={36} /></span>
          <p>Jamón Serrano de Calidad</p>
        </div>
      </div>
      <div className='new'>
        <img src={news_2} alt='Paella' />
        <div className='caption'>
          <span><GiForkKnifeSpoon size={36} /></span>
          <p>Especialidad en Paella</p>
        </div>
      </div>
      <div className='new'>
        <img src={news_3} alt='BBQ' />
        <div className='caption'>
          <span><GiChickenOven size={36} /></span>
          <p>Auténtico Sabor a la Brasa</p>
        </div>
      </div>
    </div>
  )
}

export default News