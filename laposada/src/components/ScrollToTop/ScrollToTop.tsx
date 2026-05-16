import { useState, useEffect } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'

const ScrollToTop = (): JSX.Element | null => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 z-50 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition-all"
      aria-label="Volver arriba"
    >
      <MdKeyboardArrowUp size={24} />
    </button>
  )
}

export default ScrollToTop
