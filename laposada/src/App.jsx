import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Title from "./components/Title/Title";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='¡Bienvenido a La Posada!' title='Gastronomía Innovadora' />
        <News />
      </div>
    </div>
  )
}

export default App;