import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the copyright notice with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}`))).toBeInTheDocument()
  })

  it('renders Facebook link with correct aria-label', () => {
    render(<Footer />)
    expect(
      screen.getByLabelText('Visita nuestra página de Facebook - Restaurante La Posada'),
    ).toBeInTheDocument()
  })

  it('renders Instagram link with correct aria-label', () => {
    render(<Footer />)
    expect(
      screen.getByLabelText('Visita nuestra cuenta de Instagram - La Posada Casa Pepe'),
    ).toBeInTheDocument()
  })

  it('renders TripAdvisor link with correct aria-label', () => {
    render(<Footer />)
    expect(
      screen.getByLabelText('Ver opiniones en TripAdvisor - Restaurante La Posada'),
    ).toBeInTheDocument()
  })

  it('all social links open in new tab', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
