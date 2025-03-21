import {FaGoogle, FaFacebook, FaApple} from 'react-icons/fa';
import {useNavigate} from "react-router-dom";
import './login.css';
import {signInWithPopup} from "firebase/auth";
import {googleProvider, auth, facebookProvider} from "../../firebase.js";

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log('Google login successful: ', user)
            navigate('/');
        } catch (error) {
            console.log('Google login error: ', error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(auth, facebookProvider);
            const user = result.user;
            console.log('Facebook login successful: ', user)
            navigate('/');
        } catch (error) {
            console.log('Facebook login error: ', error);
        }
    };

    return (
        <div className="login-container">
            <h2>Entrar no DavansoScore!</h2>
            <p>Centenas de estatísticas. Amor infinito pelo jogo</p>
            <div className="login-options">
                <button className="google-login" onClick={handleGoogleLogin}>
                    <FaGoogle className="icon" /> Fazer login com o Google
                </button>
                <button className="facebook-login" onClick={handleFacebookLogin}>
                    <FaFacebook className="icon" /> Entrar com Facebook
                </button>
                <button className="apple-login">
                    <FaApple className="icon" /> Entrar com Apple
                </button>
                <button className="close-button" onClick={() => navigate("/")}>
                    Fechar
                </button>
            </div>
        </div>
    );
};

export default Login;
