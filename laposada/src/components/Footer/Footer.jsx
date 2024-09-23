import './Footer.css';
import { FaFacebookSquare, FaInstagramSquare, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            {/* Social Media Icons */}
            <div className="social-icons">
                {/* Facebook Link */}
                <a href="https://www.facebook.com/p/Restaurante-La-Posada-100063636669626/" target="_blank" rel="noopener noreferrer" className="facebook">
                    <FaFacebookSquare />
                </a>

                {/* Instagram Link */}
                <a href="https://www.instagram.com/laposadacasapepe/" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagramSquare />
                </a>

                {/* Tripadvisor Link */}
                <a href="https://www.tripadvisor.es/Restaurant_Review-g2102293-d6681221-Reviews-La_Posada-Abanilla.html" target="_blank" rel="noopener noreferrer" className="tripadvisor">
                    <FaTripadvisor />
                </a>
            </div>

            {/* Copyright text */}
            <p>© {currentYear} Copyright La Posada Casa Pepe. All Rights Reserved</p>
        </div>
    );
}

export default Footer;
