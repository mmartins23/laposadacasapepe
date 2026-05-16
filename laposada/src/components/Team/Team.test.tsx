import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Team from './Team'

describe('Team', () => {
  it('renders the team photo', () => {
    render(<Team />)
    expect(screen.getByAltText('Team at La Posada')).toBeInTheDocument()
  })

  it('renders the quality description paragraph', () => {
    render(<Team />)
    expect(screen.getByText(/concepto de calidad extrema/i)).toBeInTheDocument()
  })

  it('renders the variety description paragraph', () => {
    render(<Team />)
    expect(screen.getByText(/variedad de opciones de mariscos/i)).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Team />)
    expect(asFragment()).toMatchSnapshot()
  })
})
