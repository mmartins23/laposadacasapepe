import './About.css';
import about_img from '../../assets/laposada_historia.jpeg';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt='La Posada Historia' className='about-img' />
            </div>
            <div className="about-right">
                <h3>NUESTRA HISTORIA</h3>
                <h2>La apuesta culinaria familiar, transmitiendo los secretos de las mejores recetas de generación en generación</h2>
                <p>Restaurante La Posada es el más antiguo del pueblo de Abanilla, el edificio tiene más de dos siglos construido, y data del 1856 como posada. Eran de las pocas posadas que existían por la zona, antiguamente llegaban los carruajes con las mulas, cargados con productos agrícolas y entraban al abrevadero a beber agua, lo que es hoy el patio ajardinado del restaurante, el posadero atendía a los caballos mientras sus dueños subían a las habitaciones a descansar.</p>

                <p>Lugar de encuentro de estos comerciantes y viajeros que contaban sus peripecias a los lugareños. Hoy en día se conoce como Posada Casa Pepe y es un Restaurante en el que destacan sus dos salones, el de invierno y un precioso patio ajardinado para primavera y verano, aunque recientemente se ha climatizado para que se pueda disfrutar todo el año.</p>

                <p>Para más información, síguenos a través del Facebook Restaurante La Posada.</p>
            </div>
        </div>
    )
}

export default About