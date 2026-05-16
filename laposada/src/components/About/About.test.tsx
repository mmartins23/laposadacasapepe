import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import About from './About'

describe('About', () => {
  it('renders the section heading', () => {
    render(<About />)
    expect(screen.getByText('NUESTRA HISTORIA')).toBeInTheDocument()
  })

  it('renders the main title', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)
    expect(screen.getByAltText('La Posada Historia')).toBeInTheDocument()
  })

  it('renders all three history paragraphs', () => {
    render(<About />)
    expect(screen.getByText(/Restaurante La Posada es el más antiguo/)).toBeInTheDocument()
    expect(screen.getByText(/Lugar de encuentro/)).toBeInTheDocument()
    expect(screen.getByText(/Para más información/)).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<About />)
    expect(asFragment()).toMatchSnapshot()
  })
})
