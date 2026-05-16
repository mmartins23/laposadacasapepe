import teamPhoto from '@/assets/laposada_team.png'

const TEAM_PARAGRAPHS: string[] = [
  'El restaurante trabaja con el concepto de calidad extrema, no solo en lo que respecta a la atención al cliente y toda la experiencia que tendrá en el restaurante, sino principalmente cuando hablamos de materias primas. La carne y la comida de la más alta calidad siempre están en el menú de La Posada Casa Pepe. Esto significa que el restaurante puede mantener su condición de uno de los principales atractivos de la ciudad de Murcia, al tiempo que garantiza una experiencia gastronómica diferenciada para todos los que lo visitan.',
  'La Posada Casa Pepe también ofrece una variedad de opciones de mariscos, pollo y arroz. Es una forma de variar el paladar y descubrir aún más lo que el restaurante tiene para ofrecer. Estamos dedicados a convertirnos en su opción número uno, conocida por la comida más fresca, sabrosa y saludable.',
]

const Team = (): JSX.Element => {
  return (
    <div
      id="Equipo"
      className="px-[10%] max-[1200px]:px-[5%] py-[60px] flex justify-between items-center gap-10 max-[768px]:flex-col max-[768px]:text-center"
    >
      <div className="flex-1 text-lg leading-[1.6] text-[#676767] max-[1024px]:text-base max-[768px]:text-[15px]">
        {TEAM_PARAGRAPHS.map((text: string) => (
          <p key={text.slice(0, 30)} className="mb-5">
            {text}
          </p>
        ))}
      </div>
      <div className="flex-1 max-w-[500px] max-[1024px]:max-w-[400px] max-[768px]:max-w-full max-[768px]:mt-5">
        <img
          src={teamPhoto}
          alt="Team at La Posada"
          className="w-full rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.1)]"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Team
