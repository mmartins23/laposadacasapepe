import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import App from './App'

vi.mock('./components/Navbar/Navbar', () => ({
  default: () => <nav data-testid="navbar">Navbar</nav>,
}))
vi.mock('./components/Hero/Hero', () => ({
  default: () => <section data-testid="hero">Hero</section>,
}))
vi.mock('./components/Welcome/Welcome', () => ({
  default: () => <section data-testid="welcome">Welcome</section>,
}))
vi.mock('./components/About/About', () => ({
  default: () => <section data-testid="about">About</section>,
}))
vi.mock('./components/Gastronomy/Gastronomy', () => ({
  default: () => <section data-testid="gastronomy">Gastronomy</section>,
}))
vi.mock('./components/Menu/Menu', () => ({
  default: () => <section data-testid="menu">Menu</section>,
}))
vi.mock('./components/Team/Team', () => ({
  default: () => <section data-testid="team">Team</section>,
}))
vi.mock('./components/Contact/Contact', () => ({
  default: () => <section data-testid="contact">Contact</section>,
}))
vi.mock('./components/Footer/Footer', () => ({
  default: () => <footer data-testid="footer">Footer</footer>,
}))

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('welcome')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    expect(screen.getByTestId('gastronomy')).toBeInTheDocument()
    expect(screen.getByTestId('menu')).toBeInTheDocument()
    expect(screen.getByTestId('team')).toBeInTheDocument()
    expect(screen.getByTestId('contact')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('renders section titles', () => {
    render(<App />)
    expect(screen.getByText('¡Bienvenido a La Posada!')).toBeInTheDocument()
    expect(screen.getByText('Gastronomía')).toBeInTheDocument()
    expect(screen.getByText('Nuestro Menú')).toBeInTheDocument()
    expect(screen.getByText('Equipo')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})
