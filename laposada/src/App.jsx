import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Welcome from "./components/Welcome/Welcome";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gastromomy from "./components/Gastronomy/Gastronomy";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Team from "./components/Team/Team";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='¡Bienvenido a La Posada!' title='Donde la Tradición se Encuentra con la Innovación' />
        <Welcome />
        <About/>
        <Title subtitle='Gastronomía' title='Más de 25 platos a elegir, algunas de nuestras sugerencias' />
        <Gastromomy/>
        <Title subtitle='Nuestro Menú' title='Comparte momentos y sabores únicos con amigos y familia. ¡Te esperamos!' />
        <Menu/>
        <Title subtitle='Equipo' title='Gracias por tu visita! Vuelve pronto!'/>
        <Team/>
        <Title subtitle='Contacto' title='Haz tu reserva ahora y disfruta de los mejores platos de la Región de Murcia'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;