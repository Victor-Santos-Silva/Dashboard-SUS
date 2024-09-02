import "./header.css";
import imagem from "../header/sus logo.png";
const Header = () => {
    return (
        <header>
            <div className="header-div">
                <img src={imagem} alt="logo" className="logoTipo" />
                <h1><a href="#">Home</a></h1>
                <h1><a href="#">Cadastro</a></h1>
                <h1><a href="#">Consultas</a></h1>
                <h1><a href="#">Relatórios</a></h1>
            </div>
        </header>
    )
}

export default Header;