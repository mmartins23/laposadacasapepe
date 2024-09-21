import './Menu.css';

const Menu = () => {
  return (
    <div className="menu-container" id='Menu'>
      <div className="menu-item">
        <h3>Menú Degustación</h3>
        <h4><sup>€</sup>28</h4>
        <p>Con una bebida - 28€<br/>Con todas bebida (Incluye café) - 33€</p>
        <h5>ENTRANTES</h5>
        <p>Cuatro Deliciosos Entrantes de la casa | Tomate con capellán y olivas.</p>
        <h5>PLATO PRINCIPAL</h5>
        <p>Degustación de carnes y embutidos a la brasa.</p>
        <h5>POSTRES</h5>
        <p>Postres a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refresco | Cerveza | Vinos de la casa.</p>
      </div>
      
      <div className="menu-item recommended">
        <h3>Menú Especial</h3>
        <h4><sup>€</sup>40</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan gallego | Carpaccio de salmón | Alcachofa rellena | Gambas al ajillo.</p>
        <h5>PLATO A ELEGIR</h5>
        <p>Cordero | Pollo | Churrasco de ternera | Solomillo al romero.</p>
        <h5>POSTRES</h5>
        <p>Postres caseros a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Cerveza | Vino R. Duero.</p>
      </div>
      
      <div className="menu-item">
        <h3>Menú de Arroz</h3>
        <h4><sup>€</sup>40</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan gallego | Berenjena Chips | Jamón Ibérico.</p>
        <h5>PLATO PRINCIPAL</h5>
        <p>Arroz de conejo con serranas a la leña con sarmientos.</p>
        <h5>POSTRES</h5>
        <p>Postres caseros a elegir.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Cerveza | Vino R. Duero.</p>
      </div>
      
      <div className="menu-item recommended">
        <h3>Menú La Posada</h3>
        <h4><sup>€</sup>50</h4>
        <p>MÍN 2 PERSONAS</p>
        <h5>ENTRANTES</h5>
        <p>Cuencos con 3 salsas y pan gallego | Jamón Ibérico | Gamba roja.</p>
        <h5>PLATO A ELEGIR</h5>
        <p>Entrecot de vaca extra madurada | Solomillo al romero.</p>
        <h5>POSTRES</h5>
        <p>Dama de la posada.</p>
        <h5>BEBIDAS</h5>
        <p>Agua | Refrescos | Vino R. Duero.</p>
      </div>
    </div>
  );
};

export default Menu;
