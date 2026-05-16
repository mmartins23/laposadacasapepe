import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Gastronomy from './Gastronomy'

describe('Gastronomy', () => {
  it('renders all four category buttons', () => {
    render(<Gastronomy />)
    expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Aperitivos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Platos Principales' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Postres' })).toBeInTheDocument()
  })

  it('renders all 12 dishes by default (Todos)', () => {
    render(<Gastronomy />)
    expect(screen.getAllByRole('img')).toHaveLength(12)
  })

  it('filters to only Aperitivos dishes', () => {
    render(<Gastronomy />)
    fireEvent.click(screen.getByRole('button', { name: 'Aperitivos' }))
    expect(screen.getByAltText('Croquetas de jamón ibérico')).toBeInTheDocument()
    expect(screen.getByAltText('Gambas Roja')).toBeInTheDocument()
    expect(screen.queryByAltText('Entrecot de vaca madurada')).not.toBeInTheDocument()
  })

  it('filters to only Platos Principales', () => {
    render(<Gastronomy />)
    fireEvent.click(screen.getByRole('button', { name: 'Platos Principales' }))
    expect(screen.getByAltText('Entrecot de vaca madurada')).toBeInTheDocument()
    expect(screen.queryByAltText('Croquetas de jamón ibérico')).not.toBeInTheDocument()
  })

  it('filters to only Postres', () => {
    render(<Gastronomy />)
    fireEvent.click(screen.getByRole('button', { name: 'Postres' }))
    expect(screen.getByAltText('Dama de la posada')).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(1)
  })

  it('shows all dishes again when clicking Todos after a filter', () => {
    render(<Gastronomy />)
    fireEvent.click(screen.getByRole('button', { name: 'Aperitivos' }))
    fireEvent.click(screen.getByRole('button', { name: 'Todos' }))
    expect(screen.getAllByRole('img')).toHaveLength(12)
  })

  it('marks the active category button visually', () => {
    render(<Gastronomy />)
    const todosBtn = screen.getByRole('button', { name: 'Todos' })
    expect(todosBtn.classList.contains('bg-primary')).toBe(true)

    fireEvent.click(screen.getByRole('button', { name: 'Aperitivos' }))
    expect(screen.getByRole('button', { name: 'Aperitivos' }).classList.contains('bg-primary')).toBe(true)
    expect(screen.getByRole('button', { name: 'Todos' }).classList.contains('bg-primary')).toBe(false)
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Gastronomy />)
    expect(asFragment()).toMatchSnapshot()
  })
})
