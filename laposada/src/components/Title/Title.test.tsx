import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Title from './Title'

describe('Title', () => {
  it('renders subtitle and title', () => {
    render(<Title subtitle="Gastronomía" title="Más de 25 platos a elegir" />)
    expect(screen.getByText('Gastronomía')).toBeInTheDocument()
    expect(screen.getByText('Más de 25 platos a elegir')).toBeInTheDocument()
  })

  it('renders subtitle in a <p> tag and title in an <h2>', () => {
    render(<Title subtitle="Subtítulo" title="Título Principal" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Título Principal' })).toBeInTheDocument()
    expect(screen.getByText('Subtítulo').tagName).toBe('P')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Title subtitle="sub" title="main" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
