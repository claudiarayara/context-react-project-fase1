import React from 'react';

export default function CarList({ carros }) {
    console.log('Carros:', carros);

    return (
        <div>
            {carros.length === 0 ? (
                <p>Nenhum carro cadastrado.</p>
            ) : (
                <ul>
                    {carros.map((carro, index) => (
                        <li key={index}>
                            {carro.nome} - {carro.marca} - {carro.cor} - {carro.ano}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
