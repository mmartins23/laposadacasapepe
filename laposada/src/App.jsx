import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Title from "./components/Title/Title";
import About from "./components/About/About";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='¡Bienvenido a La Posada!' title='Donde la Tradición se Encuentra con la Innovación' />
        <News />
        <About/>
      </div>
    </div>
  )
}

export default App;