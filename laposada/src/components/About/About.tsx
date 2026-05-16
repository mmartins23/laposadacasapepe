import aboutImg from '../../assets/laposada_historia.jpeg'

const HISTORY_PARAGRAPHS: string[] = [
  'Restaurante La Posada es el más antiguo del pueblo de Abanilla, el edificio tiene más de dos siglos construido, y data del 1856 como posada. Eran de las pocas posadas que existían por la zona, antiguamente llegaban los carruajes con las mulas, cargados con productos agrícolas y entraban al abrevadero a beber agua, lo que es hoy el patio ajardinado del restaurante, el posadero atendía a los caballos mientras sus dueños subían a las habitaciones a descansar.',
  'Lugar de encuentro de estos comerciantes y viajeros que contaban sus peripecias a los lugareños. Hoy en día se conoce como Posada Casa Pepe y es un Restaurante en el que destacan sus dos salones, el de invierno y un precioso patio ajardinado para primavera y verano, aunque recientemente se ha climatizado para que se pueda disfrutar todo el año.',
  'Para más información, síguenos a través del Facebook Restaurante La Posada.',
]

const About = (): JSX.Element => {
  return (
    <div
      id="El Restaurante"
      className="my-[100px] mx-auto flex items-center justify-between w-[90%] max-[1024px]:flex-col"
    >
      <div className="flex-[0_0_40%] max-[1024px]:flex-[0_0_100%] max-[1024px]:my-5 max-[1024px]:order-2">
        <img src={aboutImg} alt="La Posada Historia" className="w-full rounded-[10px]" loading="lazy" />
      </div>
      <div className="flex-[0_0_56%] max-[1024px]:flex-[0_0_100%] max-[1024px]:order-1">
        <h3 className="font-semibold text-base text-[#141212]">NUESTRA HISTORIA</h3>
        <h2 className="text-[30px] text-primary my-[10px] max-w-[400px] max-[800px]:text-2xl">
          La apuesta culinaria familiar, transmitiendo los secretos de las mejores recetas de
          generación en generación
        </h2>
        {HISTORY_PARAGRAPHS.map((text: string) => (
          <p key={text.slice(0, 30)} className="text-[#676767] mb-[15px] max-[800px]:text-sm">
            {text}
          </p>
        ))}
      </div>
    </div>
  )
}

export default About
