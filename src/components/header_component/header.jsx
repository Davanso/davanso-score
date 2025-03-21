import { useState, useEffect } from 'react';
import { auth } from "../../firebase"; // import your firebase config
import { onAuthStateChanged } from "firebase/auth"; // Firebase method to listen to auth state
import { FaStar, FaQuestionCircle, FaCog } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { BiFootball, BiBasketball, BiTennisBall } from 'react-icons/bi';
import { GiBoxingGlove, GiFullMotorcycleHelmet, GiVolleyballBall } from 'react-icons/gi';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [user, setUser] = useState(null);  // State to hold the logged-in user
    const navigate = useNavigate();

    useEffect(() => {
        // Listen to auth state changes
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Update user state when auth state changes
        });

        // Cleanup listener on component unmount
        return () => unsubscribe();
    }, []);

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

                {/* Conditionally render the user profile photo or login icon */}
                {user ? (
                    <img
                        src={user.photoURL}  // Firebase user photo URL
                        alt="User Profile"
                        className="user-photo"
                        onClick={() => navigate('/profile')}  // Optional: Navigate to profile page
                    />
                ) : (
                    <CgProfile className="icon-button" onClick={() => navigate('/login')} />
                )}
                <FaStar className="icon-button" />
                <FaQuestionCircle className="icon-button" />
                <FaCog className="icon-button" />
            </div>
        </header>
    );
};

export default Header;
