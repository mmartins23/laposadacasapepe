import { render, screen, fireEvent, act } from '@testing-library/react'
import ScrollToTop from './ScrollToTop'

describe('ScrollToTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 })
    window.scrollTo = vi.fn()
  })

  it('renders null when not scrolled', () => {
    const { container } = render(<ScrollToTop />)
    expect(container.firstChild).toBeNull()
  })

  it('renders button when scrolled past 400', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 401 })
      fireEvent.scroll(window)
    })
    expect(screen.getByRole('button', { name: /volver arriba/i })).toBeInTheDocument()
  })

  it('calls window.scrollTo on click', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 500 })
      fireEvent.scroll(window)
    })
    const button = screen.getByRole('button', { name: /volver arriba/i })
    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('hides button when scrolled back to top', () => {
    render(<ScrollToTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 500 })
      fireEvent.scroll(window)
    })
    expect(screen.getByRole('button', { name: /volver arriba/i })).toBeInTheDocument()
    act(() => {
      Object.defineProperty(window, 'scrollY', { writable: true, configurable: true, value: 0 })
      fireEvent.scroll(window)
    })
    expect(screen.queryByRole('button', { name: /volver arriba/i })).toBeNull()
  })
})
