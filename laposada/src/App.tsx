import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Welcome from '@/components/Welcome/Welcome'
import Title from '@/components/Title/Title'
import About from '@/components/About/About'
import Gastronomy from '@/components/Gastronomy/Gastronomy'
import Menu from '@/components/Menu/Menu'
import Team from '@/components/Team/Team'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

const App = () => {
  return (
    <ErrorBoundary>
      <div>
        <Navbar />
        <Hero />
        <div className="px-[10%] max-[1200px]:px-[5%]">
          <Title subtitle="¡Bienvenido a La Posada!" title="Donde la Tradición se Encuentra con la Innovación" />
          <Welcome />
          <About />
          <Title subtitle="Gastronomía" title="Más de 25 platos a elegir, algunas de nuestras sugerencias" />
          <Gastronomy />
          <Title subtitle="Nuestro Menú" title="Comparte momentos y sabores únicos con amigos y familia. ¡Te esperamos!" />
          <Menu />
          <Title subtitle="Equipo" title="Gracias por tu visita! Vuelve pronto!" />
          <Team />
          <Title subtitle="Contacto" title="Haz tu reserva ahora y disfruta de los mejores platos de la Región de Murcia" />
          <Contact />
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default App
