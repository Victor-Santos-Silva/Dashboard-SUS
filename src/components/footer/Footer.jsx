import "./footer.css";
import logo from "../footer/sus logo.png";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" className="logo" />
            <h1><a href="#">Sistema Único de Saúde</a></h1>
        </footer>
    )
}

export default Footer;