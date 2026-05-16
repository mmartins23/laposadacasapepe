import type { MenuItem, MenuSection } from '../../types'

const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Menú Degustación',
    price: 30,
    note: 'Con una bebida - 30€\nCon todas bebida (Incluye café) - 35€',
    sections: [
      { heading: 'ENTRANTES', content: 'Cuatro deliciosos entrantes de la casa| Tomate con capellán y olivas.' },
      { heading: 'PLATO PRINCIPAL', content: 'Degustación de carnes y embutidos a la brasa.' },
      { heading: 'POSTRES', content: 'Postres a elegir.' },
      { heading: 'BEBIDAS', content: 'Agua | Refresco | Cerveza | Vinos de la casa.' },
    ],
  },
  {
    name: 'Menú Especial',
    price: 42,
    note: 'MÍN 2 PERSONAS',
    recommended: true,
    sections: [
      {
        heading: 'ENTRANTES',
        content:
          'Cuencos con 3 salsas y pan casero | Carpaccio de salmón | Alcachofa rellena (según temporada) | Huevos con bechamel | Gambas al ajillo | Ensalada de capellán.',
      },
      {
        heading: 'PLATO A ELEGIR',
        content:
          'Cordero | Pollo | Churrasco de ternera | Secreto al romero | Costillar de cerdo con salsa BBQ | Solomillo al romero | Pescados frescos. (Todo a la brasa acompañado de patatas fritas y pimientos de padrón).',
      },
      { heading: 'POSTRES', content: 'Postres caseros a elegir.' },
      {
        heading: 'BEBIDAS',
        content: 'Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.',
      },
    ],
  },
  {
    name: 'Menú de Arroz',
    price: 40,
    note: 'MÍN 2 PERSONAS',
    sections: [
      {
        heading: 'ENTRANTES',
        content:
          'Cuencos con 3 salsas y pan casero | Berenjena Chips | Jamón Ibérico | Quesos variados con mermeladas caseras | Ensalada de capellán.',
      },
      {
        heading: 'PLATO PRINCIPAL',
        content: 'Arroz de conejo con serranas a la leña con sarmientos.',
      },
      { heading: 'POSTRES', content: 'Postres caseros a elegir.' },
      {
        heading: 'BEBIDAS',
        content: 'Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.',
      },
    ],
  },
  {
    name: 'Menú La Posada',
    price: 53,
    note: 'MÍN 2 PERSONAS',
    recommended: true,
    sections: [
      {
        heading: 'ENTRANTES',
        content:
          'Cuencos con 3 salsas y pan casero | Jamón Ibérico | Quesos variados con mermelada casera | Huevos con bechamel | Gamba roja | Ensalada con brotes tiernos, con salmón, fruta, queso parmesano y frutos secos.',
      },
      {
        heading: 'PLATO A ELEGIR',
        content:
          'Entrecot de vaca extra madurada | Solomillo al romero | Pollo | Secreto al romero | Costillar con salsa barbacoa | Costillas de cordero | Churrasco de ternera | Lubina, dorada o rodaballo | (Todo a la brasa acompañado de patatas fritas y pimientos de padrón).',
      },
      { heading: 'POSTRES', content: 'Dama de la posada.' },
      {
        heading: 'BEBIDAS',
        content: 'Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.',
      },
    ],
  },
]

const Menu = (): JSX.Element => {
  return (
    <div id="Menu" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-10">
      {MENU_ITEMS.map((item: MenuItem) => (
        <div
          key={item.name}
          className={`bg-[#f9f9f9] p-5 rounded-[8px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] text-center text-[#4a4a4a] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_6px_12px_rgba(0,0,0,0.15)]
            ${item.recommended ? 'border-2 border-primary bg-white' : ''}`}
        >
          <h3 className="text-2xl mb-[10px] text-primary">{item.name}</h3>
          <h4 className="text-[32px] text-primary my-[15px]">
            <sup>€</sup>
            {item.price}
          </h4>
          {item.note && (
            <p className="text-base my-[10px] leading-[1.6] whitespace-pre-line">{item.note}</p>
          )}
          {item.sections.map(({ heading, content }: MenuSection) => (
            <div key={heading}>
              <h5 className="text-[18px] mt-[15px] text-secondary">{heading}</h5>
              <p className="text-base my-[10px] leading-[1.6]">{content}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Menu
