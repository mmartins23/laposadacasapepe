import './Navbar.css';
import { MdOutlineFoodBank, MdOutlineWhatsapp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    const toogleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
            <span className='logo'><Link to='Hero' smooth={true} offset={-260} duration={500}><MdOutlineFoodBank size={64} /></Link>
            </span>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='El Restaurante' smooth={true} offset={-260} duration={500}>El Restaurante</Link></li>
                <li><Link to='Gastromonia' smooth={true} offset={-260} duration={500}>Gastronomía</Link></li>
                <li><Link to='Menu' smooth={true} offset={-220} duration={500}>Menú</Link></li>
                <li><Link to='Equipo' smooth={true} offset={-220} duration={500}>Equipo</Link></li>
                <li><Link to='Contacto' smooth={true} offset={-200} duration={500}>Contacto</Link></li>
                <li>
                    <a href="https://wa.me/34653838263" target="_blank" rel="noopener noreferrer">
                        <button className="btn">
                            Whats App<MdOutlineWhatsapp size={16} color="green" />
                        </button>
                    </a>
                </li>
            </ul>
            <span className='menu-icon' onClick={toogleMenu}><GiHamburgerMenu /></span>
        </nav>
    )
}

export default Navbar;