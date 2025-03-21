import {useState, useEffect, useRef} from 'react';
import { auth } from "../../firebase"; // import your firebase config
import { onAuthStateChanged, signOut } from "firebase/auth"; // Firebase method to listen to auth state
import { FaStar, FaQuestionCircle, FaCog } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { BiFootball, BiBasketball, BiTennisBall } from 'react-icons/bi';
import { GiBoxingGlove, GiFullMotorcycleHelmet, GiVolleyballBall } from 'react-icons/gi';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
    const [user, setUser] = useState(null);  // State to hold the logged-in user
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);

    // Listen to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Update user state when auth state changes
            setShowMenu(false);
        });

        return () => unsubscribe();
    }, []);

    // Handle Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.log('Logout error: ', error);
        }
    };

    // Handle Click Outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);  // Close the menu if click outside
            }
        };

        // Detect click outside
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
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

                <FaStar className="icon-button" />
                <FaQuestionCircle className="icon-button" />
                <FaCog className="icon-button" />
                {/* Conditionally render the user profile photo or login icon */}
                {user ? (
                    <div className="user-profile-container">
                        <img
                            src={user.photoURL}  // Firebase user photo URL
                            alt="User Profile"
                            className="user-photo"
                            onClick={() => setShowMenu(!showMenu)}  // Toggle menu visibility on click
                        />

                        {/* Render the profile menu if showMenu is true */}
                        {showMenu && (
                            <div className="profile-menu" ref={menuRef}>
                                <button onClick={() => navigate('/profile')}>Perfil</button>
                                <button onClick={handleLogout}>Sair</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <CgProfile className="icon-button" onClick={() => navigate('/login')} />
                )}
            </div>
        </header>
    );
};

export default Header;
