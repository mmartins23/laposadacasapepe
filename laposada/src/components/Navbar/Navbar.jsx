import { MdOutlineFoodBank, MdOutlineWhatsapp } from "react-icons/md";
import './Navbar.css';
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.screenY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    return (
        <nav className={`container ${sticky? 'dark-nav' : ""}`}>
            <span>
                <MdOutlineFoodBank size={64} />
            </span>
            <ul>
                <li>News</li>
                <li>Historia</li>
                <li>Menú</li>
                <li>Equipo</li>
                <li>Contacto</li>
                <li><button className="btn">Whats App<MdOutlineWhatsapp size={18} color="green" />
                </button></li>
            </ul>
        </nav>
    )
}

export default Navbar;