import { lazy, Suspense } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import Navbar from '@/components/Navbar/Navbar'
import Hero from '@/components/Hero/Hero'
import Welcome from '@/components/Welcome/Welcome'
import Title from '@/components/Title/Title'
import About from '@/components/About/About'
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop'

const Gastronomy = lazy(() => import('@/components/Gastronomy/Gastronomy'))
const Menu = lazy(() => import('@/components/Menu/Menu'))
const Team = lazy(() => import('@/components/Team/Team'))
const Contact = lazy(() => import('@/components/Contact/Contact'))
const Footer = lazy(() => import('@/components/Footer/Footer'))

const App = () => {
  return (
    <ErrorBoundary>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded"
      >
        Saltar para o conteúdo
      </a>
      <div>
        <Navbar />
        <main id="main-content">
          <Hero />
          <div className="px-[10%] max-[1200px]:px-[5%]">
            <Title subtitle="¡Bienvenido a La Posada!" title="Donde la Tradición se Encuentra con la Innovación" />
            <Welcome />
            <About />
            <Title subtitle="Gastronomía" title="Más de 25 platos a elegir, algunas de nuestras sugerencias" />
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Gastronomy />
            </Suspense>
            <Title subtitle="Nuestro Menú" title="Comparte momentos y sabores únicos con amigos y familia. ¡Te esperamos!" />
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Menu />
            </Suspense>
            <Title subtitle="Equipo" title="Gracias por tu visita! Vuelve pronto!" />
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Team />
            </Suspense>
            <Title subtitle="Contacto" title="Haz tu reserva ahora y disfruta de los mejores platos de la Región de Murcia" />
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Contact />
            </Suspense>
            <Suspense fallback={<div className="min-h-[200px]" />}>
              <Footer />
            </Suspense>
          </div>
        </main>
      </div>
      <ScrollToTop />
    </ErrorBoundary>
  )
}

export default App
