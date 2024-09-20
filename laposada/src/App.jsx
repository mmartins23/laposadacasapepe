import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Title from "./components/Title/Title";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='¡Bienvenido a La Posada!' title='Donde la Tradición se Encuentra con la Innovación' />
        <News />
        <About/>
        <Title subtitle='Recomendaciones' title='Más de 25 platos a elegir, algunas de nuestras sugerencias' />
        <Gallery/>
        <Title subtitle='Contacto' title='Haz tu reserva ahora y disfruta de los mejores platos de la Región de Murcia'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App;