import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import Navbar from './Navbar'

vi.mock('react-scroll', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Link: ({ children, smooth: _smooth, offset: _offset, duration: _duration, to: _to, ...props }: React.HTMLAttributes<HTMLAnchorElement> & { smooth?: boolean; offset?: number; duration?: number; to?: string }) => (
    <a {...props}>{children}</a>
  ),
}))

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('El Restaurante')).toBeInTheDocument()
    expect(screen.getByText('Gastronomía')).toBeInTheDocument()
    expect(screen.getByText('Menú')).toBeInTheDocument()
    expect(screen.getByText('Equipo')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('renders the WhatsApp button linking to the correct number', () => {
    render(<Navbar />)
    const waLink = screen.getByRole('link', { name: /whats app/i })
    expect(waLink).toHaveAttribute('href', 'https://wa.me/34653838263')
  })

  it('renders the hamburger menu icon', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Abrir menú')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Abrir menú')
    const ul = screen.getByRole('list')

    expect(ul.className).toContain('right-[-200px]')
    fireEvent.click(toggle)
    expect(ul.className).toContain('right-0')
    fireEvent.click(toggle)
    expect(ul.className).toContain('right-[-200px]')
  })

  describe('sticky behavior on scroll', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    })
    afterEach(() => {
      vi.restoreAllMocks()
    })

    it('adds dark background class when scrolled past 50px', () => {
      render(<Navbar />)
      const nav = screen.getByRole('navigation')
      expect(nav.className).not.toContain('bg-black')

      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      fireEvent.scroll(window)
      expect(nav.className).toContain('bg-black')
    })

    it('removes dark background when scrolled back to top', () => {
      render(<Navbar />)
      const nav = screen.getByRole('navigation')

      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      fireEvent.scroll(window)
      expect(nav.className).toContain('bg-black')

      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      fireEvent.scroll(window)
      expect(nav.className).not.toContain('bg-black')
    })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Navbar />)
    expect(asFragment()).toMatchSnapshot()
  })
})
