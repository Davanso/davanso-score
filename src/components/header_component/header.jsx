import { FaUserCircle, FaStar, FaQuestionCircle, FaCog } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { BiFootball, BiBasketball, BiTennisBall } from 'react-icons/bi';
import {GiBoxingGlove, GiFullMotorcycleHelmet, GiVolleyballBall} from 'react-icons/gi';
import './header.css';
import {CgProfile} from "react-icons/cg";

const Header = () => {
    return (
        <header>
            <div className="left-section">
                <h1 className="logo">Davanso Score</h1>
                <nav>
                    <button><BiFootball /> <span>Futebol</span></button>
                    <button><BiBasketball /> <span>Basquete</span></button>
                    <button><GiVolleyballBall /> <span>Vôlei</span></button>
                    <button><GiBoxingGlove /> <span>MMA</span></button>
                    <button><BiTennisBall /> <span>Tênis</span></button>
                    <button><GiFullMotorcycleHelmet /> <span>Fórmula 1</span></button>
                </nav>
            </div>

            <div className="right-section">
                <div className="search-container">
                    <IoSearch />
                    <input type="text" placeholder="Pesquisar no DavansoScore!" />
                </div>

                <CgProfile className="icon-button" />
                <FaStar className="icon-button" />
                <FaQuestionCircle className="icon-button" />
                <FaCog className="icon-button" />
            </div>
        </header>
    );
};

export default Header;
