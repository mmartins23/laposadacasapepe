import './Gastronomy.css';
import { useState } from 'react';
import menu_1 from '../../assets/menu1.jpg';
import menu_2 from '../../assets/menu2.jpg';
import menu_3 from '../../assets/menu3.jpg';
import menu_4 from '../../assets/menu4.jpg';
import menu_5 from '../../assets/menu5.jpg';
import menu_6 from '../../assets/menu6.jpg';
import menu_7 from '../../assets/menu7.jpg';
import menu_8 from '../../assets/menu8.jpg';
import menu_9 from '../../assets/menu9.jpg';
import menu_10 from '../../assets/menu10.jpg';
import menu_11 from '../../assets/menu11.jpg';
import menu_12 from '../../assets/menu12.jpg';

// Define os pratos e suas categorias
const images = [
  { src: menu_1, text: 'Croquetas de jamón ibérico', category: 'Aperitivos' },
  { src: menu_2, text: 'Huevos rotos con jamón ibérico', category: 'Aperitivos' },
  { src: menu_3, text: 'Pincho de gambon y salsa de anchoas', category: 'Aperitivos' },
  { src: menu_4, text: 'Entrecot de vaca madurada', category: 'Platos Principales' },
  { src: menu_5, text: 'Chuleton de vaca madurada', category: 'Platos Principales' },
  { src: menu_6, text: 'Rodaballo a la brasa', category: 'Platos Principales' },
  { src: menu_7, text: 'Tortilleras', category: 'Aperitivos' },
  { src: menu_8, text: 'Huevos con bechamel', category: 'Aperitivos' },
  { src: menu_9, text: 'Salmorejo con jamón ibérico', category: 'Aperitivos' },
  { src: menu_10, text: 'Gambas al ajillo', category: 'Platos Principales' },
  { src: menu_11, text: 'Arroz de conejo y serrenas', category: 'Platos Principales' },
  { src: menu_12, text: 'Dama de la posada', category: 'Postres' }
];

const Gastromomy = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  // Filtra as imagens de acordo com a categoria ativa
  const filteredImages = activeCategory === 'Todos'
    ? images
    : images.filter(image => image.category === activeCategory);

  return (
    <div className='gastromomy' id='Gastromonia'>
      {/* Botões de categorias */}
      <div className='category-buttons'>
        <button onClick={() => setActiveCategory('Todos')} className={activeCategory === 'Todos' ? 'active' : ''}>
          Todos
        </button>
        <button onClick={() => setActiveCategory('Aperitivos')} className={activeCategory === 'Aperitivos' ? 'active' : ''}>
          Aperitivos
        </button>
        <button onClick={() => setActiveCategory('Platos Principales')} className={activeCategory === 'Platos Principales' ? 'active' : ''}>
          Platos Principales
        </button>
        <button onClick={() => setActiveCategory('Postres')} className={activeCategory === 'Postres' ? 'active' : ''}>
          Postres
        </button>
      </div>

      {/* Galeria de imagens */}
      <div className='gallery'>
        {filteredImages.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.text} />
            <div className="image-text">{image.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gastromomy;
