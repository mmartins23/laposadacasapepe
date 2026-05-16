import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Welcome from './Welcome'

describe('Welcome', () => {
  it('renders three welcome cards', () => {
    render(<Welcome />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })

  it('renders the correct captions', () => {
    render(<Welcome />)
    expect(screen.getByText('¡Tu Mesa Te Espera!')).toBeInTheDocument()
    expect(screen.getByText('Disfruta Nuestro Jardín')).toBeInTheDocument()
    expect(screen.getByText('Auténtico Sabor a la Brasa')).toBeInTheDocument()
  })

  it('renders images with descriptive alt text', () => {
    render(<Welcome />)
    expect(screen.getByAltText('La Posada Restaurant')).toBeInTheDocument()
    expect(screen.getByAltText('La Posada Restaurant Garden')).toBeInTheDocument()
    expect(screen.getByAltText('La Posada Restaurant Barbeque')).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Welcome />)
    expect(asFragment()).toMatchSnapshot()
  })
})
