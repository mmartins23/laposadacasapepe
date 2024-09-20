import './Footer.css';

import { FaFacebookSquare, FaInstagramSquare, FaTripadvisor } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
                    <FaFacebookSquare />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
                    <FaInstagramSquare />
                </a>
                <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="tripadvisor">
                    <FaTripadvisor />
                </a>
            </div>
            <p>© {currentYear} Copyright La Posada Casa Pepe. All Rights Reserved</p>
        </div>
    );
}

export default Footer;
