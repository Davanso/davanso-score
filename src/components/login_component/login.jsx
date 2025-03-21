import {FaGoogle, FaFacebook, FaApple} from 'react-icons/fa';
import './login.css';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <h2>Entrar no DavansoScore!</h2>
            <p>Centenas de estatísticas. Amor infinito pelo jogo</p>
            <div className="login-options">
                <button className="google-login">
                    <FaGoogle className="icon" /> Fazer login com o Google
                </button>
                <button className="facebook-login">
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
