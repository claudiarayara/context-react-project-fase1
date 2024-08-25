import { Link } from "react-router-dom";

export default function NavBar() {
    return(
        <nav>
       <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/sobre">Sobre</Link>
        </li>
        <li>
            <Link to="/listadecarros">Lista de Carros</Link>
        </li>
        <li>
            <Link to="/adicionarcarro">Adicionar Carro</Link>
        </li>
       </ul>
        </nav>
    )
}