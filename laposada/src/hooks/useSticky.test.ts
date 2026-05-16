import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import useSticky from './useSticky'

describe('useSticky', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
  })

  it('returns false initially', () => {
    const { result } = renderHook(() => useSticky())
    expect(result.current).toBe(false)
  })

  it('returns true when scrolled past default threshold (50px)', () => {
    const { result } = renderHook(() => useSticky())
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })

  it('returns false when scrolled back above threshold', () => {
    const { result } = renderHook(() => useSticky())
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(false)
  })

  it('respects a custom threshold', () => {
    const { result } = renderHook(() => useSticky(200))
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(false)

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 250, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(result.current).toBe(true)
  })

  it('removes the scroll listener on unmount', () => {
    const spy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useSticky())
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
