import { useState, useEffect } from 'react'
import { MdOutlineWhatsapp } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-scroll'
import useSticky from '@/hooks/useSticky'
import { config } from '@/config'
import laposadaLogo from '@/assets/laposada_logo.svg'

const NAV_LINKS: { label: string; to: string; offset: number }[] = [
  { label: 'El Restaurante', to: 'El Restaurante', offset: -260 },
  { label: 'Gastronomía', to: 'Gastromonia', offset: -260 },
  { label: 'Menú', to: 'Menu', offset: -220 },
  { label: 'Equipo', to: 'Equipo', offset: -220 },
  { label: 'Contacto', to: 'Contacto', offset: -200 },
]

const Navbar = (): JSX.Element => {
  const sticky = useSticky()
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  const toggleMenu = (): void => setMobileMenu((prev) => !prev)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && mobileMenu) setMobileMenu(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenu])

  return (
    <nav
      className={`w-full text-white py-1 px-[5%] fixed top-0 left-0 flex items-center justify-between z-10 transition-all duration-500 ${
        sticky ? 'bg-black' : ''
      }`}
    >
      <span className="cursor-pointer">
        <Link to="Hero" smooth={true} offset={-260} duration={500}>
          <img src={laposadaLogo} alt="La Posada Casa Pepe" className="h-16 w-auto" />
        </Link>
      </span>

      <ul
        id="main-nav-menu"
        className={`fixed top-0 bottom-0 bg-[#0d0d0d] w-[200px] pt-[70px] z-[-1] transition-all duration-500
          nav:flex nav:static nav:items-center nav:w-auto nav:bg-transparent nav:pt-0 nav:z-auto
          ${mobileMenu ? 'right-0' : 'right-[-200px]'}`}
      >
        {NAV_LINKS.map(({ label, to, offset }) => (
          <li
            key={to}
            className="block my-6 mx-10 nav:inline-block nav:my-[5px] nav:mx-5 nav:text-base"
          >
            <Link to={to} smooth={true} offset={offset} duration={500}>
              {label}
            </Link>
          </li>
        ))}
        <li className="block my-6 mx-10 nav:inline-block nav:my-[5px] nav:mx-5">
          <a href={config.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-1 bg-white text-[#212121] px-3 py-2 text-xs nav:text-base nav:px-3 nav:py-2 rounded-[30px] border-0 cursor-pointer">
              Whats App
              <MdOutlineWhatsapp size={16} color="green" />
            </button>
          </a>
        </li>
      </ul>

      <span
        className="block w-[30px] cursor-pointer nav:hidden"
        onClick={toggleMenu}
        aria-label="Abrir menú"
        aria-expanded={mobileMenu}
        aria-controls="main-nav-menu"
      >
        <GiHamburgerMenu />
      </span>
    </nav>
  )
}

export default Navbar
