import { render, screen, waitFor } from '@testing-library/react'
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
  it('renders all main sections', async () => {
    render(<App />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    expect(screen.getByTestId('welcome')).toBeInTheDocument()
    expect(screen.getByTestId('about')).toBeInTheDocument()
    await waitFor(() => expect(screen.getByTestId('gastronomy')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByTestId('menu')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByTestId('team')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByTestId('contact')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByTestId('footer')).toBeInTheDocument())
  })

  it('renders section titles', async () => {
    render(<App />)
    expect(screen.getByText('¡Bienvenido a La Posada!')).toBeInTheDocument()
    await waitFor(() => expect(screen.getByText('Gastronomía')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('Nuestro Menú')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('Equipo')).toBeInTheDocument())
    await waitFor(() => expect(screen.getByText('Contacto')).toBeInTheDocument())
  })

  it('matches snapshot', async () => {
    const { asFragment } = render(<App />)
    await waitFor(() => expect(screen.getByTestId('footer')).toBeInTheDocument())
    expect(asFragment()).toMatchSnapshot()
  })
})
