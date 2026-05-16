import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the restaurant name', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /La Posada Casa Pepe/i })).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/Desde 1846/i)).toBeInTheDocument()
  })

  it('renders the "Nuestra Carta" button linking to the menu PDF', () => {
    render(<Hero />)
    const cartaLink = screen.getByRole('link', { name: /Nuestra Carta/i })
    expect(cartaLink).toHaveAttribute('target', '_blank')
  })

  it('renders the "Reserva Mesa" button linking to WhatsApp', () => {
    render(<Hero />)
    const reservaLink = screen.getByRole('link', { name: /Reserva Mesa/i })
    expect(reservaLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
    expect(reservaLink).toHaveAttribute('target', '_blank')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Hero />)
    expect(asFragment()).toMatchSnapshot()
  })
})
