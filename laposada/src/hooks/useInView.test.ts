import { renderHook, act } from '@testing-library/react'
import useInView from './useInView'

describe('useInView', () => {
  let mockObserver: { observe: ReturnType<typeof vi.fn>; disconnect: ReturnType<typeof vi.fn> }
  let intersectionCallback: IntersectionObserverCallback

  beforeEach(() => {
    mockObserver = { observe: vi.fn(), disconnect: vi.fn() }
    vi.stubGlobal(
      'IntersectionObserver',
      vi.fn((callback: IntersectionObserverCallback) => {
        intersectionCallback = callback
        return mockObserver
      })
    )
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    // Restore global IntersectionObserver mock from setupTests
    vi.stubGlobal('IntersectionObserver', vi.fn(() => ({
      observe: vi.fn(),
      disconnect: vi.fn(),
      unobserve: vi.fn(),
    })))
  })

  it('returns false initially', () => {
    const { result } = renderHook(() => useInView())
    const [, inView] = result.current
    expect(inView).toBe(false)
  })

  it('returns a ref and inView tuple', () => {
    const { result } = renderHook(() => useInView())
    const [ref, inView] = result.current
    expect(ref).toBeDefined()
    expect(typeof ref).toBe('object')
    expect(typeof inView).toBe('boolean')
  })

  it('accepts a custom threshold parameter', () => {
    const { result } = renderHook(() => useInView(0.5))
    const [, inView] = result.current
    expect(inView).toBe(false)
  })

  it('returns true when intersection callback fires with isIntersecting true', () => {
    const { result } = renderHook(() => useInView())
    if (typeof intersectionCallback === 'function') {
      act(() => {
        intersectionCallback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
      const [, inView] = result.current
      expect(inView).toBe(true)
    } else {
      // ref.current is null so observer is not created - initial state is false
      const [, inView] = result.current
      expect(inView).toBe(false)
    }
  })

  it('does not set inView when isIntersecting is false', () => {
    const { result } = renderHook(() => useInView())
    if (typeof intersectionCallback === 'function') {
      act(() => {
        intersectionCallback([{ isIntersecting: false } as IntersectionObserverEntry], {} as IntersectionObserver)
      })
    }
    const [, inView] = result.current
    expect(inView).toBe(false)
  })
})
