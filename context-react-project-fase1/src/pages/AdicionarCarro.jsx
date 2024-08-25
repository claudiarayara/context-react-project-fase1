import NavBar from "../components/NavBar";
import CarForm from "../components/CarForm";

export default function AdicionarCarros({ onAddCarros }) {
    return (
        <div>
            <NavBar />
            <h1>Adicionar Carro</h1>
            <CarForm onAddCarros={onAddCarros} />
        </div>
    );
}
