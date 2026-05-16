import { useState } from 'react'
import type { Dish, DishCategory, GastronomyFilter } from '../../types'
import menu1 from '../../assets/menu1.jpg'
import menu2 from '../../assets/menu2.jpg'
import menu3 from '../../assets/menu3.jpg'
import menu4 from '../../assets/menu4.jpg'
import menu5 from '../../assets/menu5.jpg'
import menu6 from '../../assets/menu6.jpg'
import menu7 from '../../assets/menu7.jpg'
import menu8 from '../../assets/menu8.jpg'
import menu9 from '../../assets/menu9.jpg'
import menu10 from '../../assets/menu10.jpg'
import menu11 from '../../assets/menu11.jpg'
import menu12 from '../../assets/menu12.jpg'

const DISHES: Dish[] = [
  { src: menu1, text: 'Croquetas de jamón ibérico', category: 'Aperitivos' },
  { src: menu2, text: 'Gambas Roja', category: 'Aperitivos' },
  { src: menu3, text: 'Pincho de gambon y salsa de anchoas', category: 'Aperitivos' },
  { src: menu4, text: 'Entrecot de vaca madurada', category: 'Platos Principales' },
  { src: menu5, text: 'Atún de ijada', category: 'Platos Principales' },
  { src: menu6, text: 'Rodaballo a la brasa', category: 'Platos Principales' },
  { src: menu7, text: 'Tortilleras', category: 'Aperitivos' },
  { src: menu8, text: 'Huevos con bechamel', category: 'Aperitivos' },
  { src: menu9, text: 'Salmorejo con jamón ibérico', category: 'Aperitivos' },
  { src: menu10, text: 'Gambas al ajillo', category: 'Platos Principales' },
  { src: menu11, text: 'Arroz de conejo y serrenas', category: 'Platos Principales' },
  { src: menu12, text: 'Dama de la posada', category: 'Postres' },
]

const FILTERS: GastronomyFilter[] = ['Todos', 'Aperitivos', 'Platos Principales', 'Postres']

const filterDishes = (dishes: Dish[], filter: GastronomyFilter): Dish[] =>
  filter === 'Todos' ? dishes : dishes.filter((d: Dish) => d.category === (filter as DishCategory))

const Gastronomy = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<GastronomyFilter>('Todos')

  const visibleDishes: Dish[] = filterDishes(DISHES, activeFilter)

  return (
    <div id="Gastromonia" className="my-[80px] mx-auto w-[90%] text-center">
      <div className="mb-5 max-[480px]:flex max-[480px]:flex-col max-[480px]:items-center">
        {FILTERS.map((filter: GastronomyFilter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-[10px] mr-[10px] mb-[10px] rounded-[20px] border-none text-base cursor-pointer transition-colors duration-300
              max-[480px]:w-full max-[480px]:mr-0 max-[480px]:py-[15px] max-[480px]:text-sm
              ${activeFilter === filter ? 'bg-primary text-white' : 'bg-[#d8d3d3] hover:bg-primary hover:text-white'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {visibleDishes.map((dish: Dish) => (
          <div
            key={dish.text}
            className="relative w-[calc(33.333%-20px)] mb-5 rounded-[10px] box-border
              max-[1024px]:w-[calc(50%-20px)] max-[768px]:w-[calc(100%-20px)]"
          >
            <img src={dish.src} alt={dish.text} className="w-full rounded-[10px]" loading="lazy" />
            <div className="absolute bottom-[10px] left-0 right-0 text-white bg-[rgba(0,0,0,0.5)] py-[10px] text-base text-center rounded-b-[10px]">
              {dish.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gastronomy
