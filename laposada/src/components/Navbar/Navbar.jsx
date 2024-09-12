import { MdOutlineFoodBank, MdOutlineWhatsapp } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="container">
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