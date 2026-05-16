import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Menu from './Menu'

describe('Menu', () => {
  it('renders all four menu options', () => {
    render(<Menu />)
    expect(screen.getByText('Menú Degustación')).toBeInTheDocument()
    expect(screen.getByText('Menú Especial')).toBeInTheDocument()
    expect(screen.getByText('Menú de Arroz')).toBeInTheDocument()
    expect(screen.getByText('Menú La Posada')).toBeInTheDocument()
  })

  it('renders the correct prices', () => {
    render(<Menu />)
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('40')).toBeInTheDocument()
    expect(screen.getByText('53')).toBeInTheDocument()
  })

  it('renders section headings for each menu', () => {
    render(<Menu />)
    const entrantesHeadings = screen.getAllByText('ENTRANTES')
    expect(entrantesHeadings.length).toBeGreaterThan(0)
    expect(screen.getAllByText('POSTRES').length).toBeGreaterThan(0)
    expect(screen.getAllByText('BEBIDAS').length).toBeGreaterThan(0)
  })

  it('highlights recommended menus with border class', () => {
    render(<Menu />)
    const especial = screen.getByText('Menú Especial').closest('div')
    const laposada = screen.getByText('Menú La Posada').closest('div')
    const degustacion = screen.getByText('Menú Degustación').closest('div')

    expect(especial?.className).toContain('border-primary')
    expect(laposada?.className).toContain('border-primary')
    expect(degustacion?.className).not.toContain('border-primary')
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Menu />)
    expect(asFragment()).toMatchSnapshot()
  })
})
