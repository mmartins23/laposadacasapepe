import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Contact from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText(/Envíanos un mensaje/i)).toBeInTheDocument()
  })

  it('renders the description paragraph', () => {
    render(<Contact />)
    expect(screen.getByText(/No dudes en comunicarte/i)).toBeInTheDocument()
  })

  it('renders Facebook link', () => {
    render(<Contact />)
    expect(
      screen.getByLabelText('Visita nuestra página de Facebook - Restaurante La Posada'),
    ).toBeInTheDocument()
  })

  it('renders WhatsApp link with correct phone number', () => {
    render(<Contact />)
    const waLink = screen.getByLabelText(
      'Enviar un mensaje por WhatsApp al +34 653 83 82 63',
    )
    expect(waLink).toHaveAttribute('href', 'https://wa.me/34653838263')
  })

  it('renders opening hours', () => {
    render(<Contact />)
    expect(screen.getByText(/Jueves a Domingo: 13:00 - 16:00/i)).toBeInTheDocument()
  })

  it('renders Google Maps link', () => {
    render(<Contact />)
    expect(
      screen.getByLabelText(
        'Ver la ubicación en Google Maps - Calle Francisco Salzillo 22, Abanilla, Murcia',
      ),
    ).toBeInTheDocument()
  })

  it('renders the embedded Google Map iframe', () => {
    render(<Contact />)
    expect(screen.getByTitle('Google Map')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />)
    expect(asFragment()).toMatchSnapshot()
  })
})
