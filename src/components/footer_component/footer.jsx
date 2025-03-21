import { FaInstagram, FaTiktok } from 'react-icons/fa';
import './footer.css';
import {FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="top-section">
                <h1 className="logo">DavansoScore!</h1>
            </div>

            <div className="middle-section">
                <nav>
                    <a href="#">PUBLICAR</a>
                    <a href="#">CONTATO</a>
                    <a href="#">EDITOR</a>
                    <a href="#">NEWS</a>
                </nav>
                <div className="social-icons">
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaTiktok /></a>
                </div>
            </div>

            <div className="bottom-section">
                <p>© 2025 DavansoScore! – Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
