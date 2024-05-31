import "./style.scss";
import Logo from "../../assets/Logo.svg";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <img src={Logo} alt="Logo" onClick={() => {navigate("/home")}}/>
        </div>
    );
}


export default Header;