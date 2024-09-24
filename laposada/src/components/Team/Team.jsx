import './Team.css';
import teamPhoto from '../../assets/laposada_team.png';

const Team = () => {
  return (
    <div className="team-section container" id="Equipo">
      <div className="team-text">
        <p>
        El restaurante trabaja con el concepto de calidad extrema, no solo en lo que respecta a la atención al cliente y toda la experiencia que tendrá en el restaurante, sino principalmente cuando hablamos de materias primas. La carne y la comida de la más alta calidad siempre están en el menú de La Posada Casa Pepe. Esto significa que el restaurante puede mantener su condición de uno de los principales atractivos de la ciudad de Murcia, al tiempo que garantiza una experiencia gastronómica diferenciada para todos los que lo visitan.
        </p>
        <p>
        La Posada Casa Pepe también ofrece una variedad de opciones de mariscos, pollo y arroz. Es una forma de variar el paladar y descubrir aún más lo que el restaurante tiene para ofrecer. Estamos dedicados a convertirnos en su opción número uno, conocida por la comida más fresca, sabrosa y saludable.
        </p>
      </div>
      <div className="team-photo">
        <img src={teamPhoto} alt="Team at La Posada" />
      </div>
    </div>
  );
};

export default Team;
