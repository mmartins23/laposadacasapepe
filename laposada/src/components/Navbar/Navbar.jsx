import './Navbar.css';
import { MdOutlineFoodBank, MdOutlineWhatsapp } from "react-icons/md";
import { useState, useEffect } from "react";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
            <span><Link to='Hero' smooth={true} offset={-260} duration={500}><MdOutlineFoodBank size={64} /></Link>
            </span>
            <ul>
                <li><Link to='El Restaurante' smooth={true} offset={-260} duration={500}>El Restaurante</Link></li>
                <li><Link to='Gastromonia' smooth={true} offset={-260} duration={500}>Gastronomía</Link></li>
                <li><Link to='Menu' smooth={true} offset={-220} duration={500}>Menú</Link></li>
                <li>Equipo</li>
                <li><Link to='Contacto' smooth={true} offset={-200} duration={500}>Contacto</Link></li>
                <li><button className="btn">Whats App<MdOutlineWhatsapp size={18} color="green" />
                </button></li>
            </ul>
        </nav>
    )
}

export default Navbar;