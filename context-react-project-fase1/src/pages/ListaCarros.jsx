import NavBar from "../components/NavBar";
import CarList from "../components/CarList";
import { useLocation } from 'react-router-dom';

export default function ListaCarros({ carros }) {
    return (
        <div>
            <NavBar />
            <h1>Lista de Carros</h1>
            <CarList carros={carros} />
        </div>
    );
}
