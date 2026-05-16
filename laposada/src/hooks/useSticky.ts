import { useState, useEffect } from 'react'

const useSticky = (threshold: number = 50): boolean => {
  const [sticky, setSticky] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setSticky(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return sticky
}

export default useSticky
