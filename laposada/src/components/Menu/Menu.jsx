import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container" id='Menu'>
      <div className="menu-item">
        <h3>Menú Degustación</h3>
        <h4><sup>€</sup>30</h4>
        <p>Con una bebida - 30€<br />Con todas bebida (Incluye café) - 35€</p>
        <h5>ENTRANTES</h5>
        <p>Cuatro deliciosos entrantes de la casa| Tomate con capellán y olivas.</p>
        <h5>PLATO PRINCIPAL</h5>
        <p>Degustación de carnes y embutidos a la brasa.</p>
        <h5>POSTRES</h5>
        <p>Postres a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refresco | Cerveza | Vinos de la casa.</p>
      </div>

      <div className="menu-item recommended">
        <h3>Menú Especial</h3>
        <h4><sup>€</sup>42</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan casero | Carpaccio de salmón | Alcachofa rellena (según temporada) | Huevos con bechamel | Gambas al ajillo | Ensalada de capellán.</p>
        <h5>PLATO A ELEGIR</h5>
        <p>Cordero | Pollo | Churrasco de ternera | Secreto al romero | Costillar de cerdo con salsa BBQ | Solomillo al romero | Pescados frescos. (Todo a la brasa acompañado de patatas fritas y pimientos de padrón).</p>
        <h5>POSTRES</h5>
        <p>Postres caseros a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.</p>
      </div>

      <div className="menu-item">
        <h3>Menú de Arroz</h3>
        <h4><sup>€</sup>40</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan casero | Berenjena Chips | Jamón Ibérico | Quesos variados con mermeladas caseras | Ensalada de capellán.</p>
        <h5>PLATO PRINCIPAL</h5>
        <p>Arroz de conejo con serranas a la leña con sarmientos.</p>
        <h5>POSTRES</h5>
        <p>Postres caseros a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.</p>
      </div>

      <div className="menu-item recommended">
        <h3>Menú La Posada</h3>
        <h4><sup>€</sup>53</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan casero | Jamón Ibérico | Quesos variados con mermelada casera | Huevos con bechamel | Gamba roja | Ensalada con brotes tiernos, con salmón, fruta, queso parmesano y frutos secos.</p>
        <h5>PLATO A ELEGIR</h5>
        <p>Entrecot de vaca extra madurada | Solomillo al romero | Pollo | Secreto al romero | Costillar con salsa barbacoa | Costillas de cordero | Churrasco de ternera | Lubina, dorada o rodaballo | (Todo a la brasa acompañado de patatas fritas y pimientos de padrón).</p>
        <h5>POSTRES</h5>
        <p>Dama de la posada.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Cerveza | Vino Blanco, Rosado y Tinto R. Duero (1botella x 2 pers.) | Café.</p>
      </div>
    </div>
  );
};

export default Menu;
