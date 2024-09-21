import './Welcome.css';
import news_1 from '../../assets/laposada_news1.jpg';
import news_2 from '../../assets/laposasa_news2.jpg';
import news_3 from '../../assets//laposada_news3.jpg';


const Welcome = () => {
  return (
    <div className='news' id='El Restaurante'>
      <div className='new'>
        <img src={news_1} alt='La Posada Restaurant' />
        <div className='caption'>
          <p>¡Tu Mesa Te Espera!</p>
        </div>
      </div>
      <div className='new'>
        <img src={news_2} alt='La Posada Restaurant Garden' />
        <div className='caption'>
          <p>Disfruta al Aire Libre en Nuestro Jardín</p>
        </div>
      </div>
      <div className='new'>
        <img src={news_3} alt='La Posada Restaurant Barbeque' />
        <div className='caption'>
          <p>Auténtico Sabor a la Brasa</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome;