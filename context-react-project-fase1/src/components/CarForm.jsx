import React from 'react';

export default function CarForm({ onAddCarros }) {
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const nome = form.querySelector('#nome').value;
        const marca = form.querySelector('#marca').value;
        const cor = form.querySelector('#cor').value;
        const ano = form.querySelector('#ano').value;

        const novoCarro = { nome, marca, cor, ano };
        onAddCarros(novoCarro);

        alert('Carro adicionado! Consultar carros na página: Lista de Carros');

        form.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" id="nome" name="nome" required />
                </label>
                <br />
                <label>
                    Marca:
                    <input type="text" id="marca" name="marca" required />
                </label>
                <br />
                <label>
                    Cor:
                    <input type="text" id="cor" name="cor" required />
                </label>
                <br />
                <label>
                    Ano:
                    <input type="text" id="ano" name="ano" required placeholder="Ex: 2024" />
                </label>
                <br /><br />
                <button type="submit">Adicionar</button>
            </form>
        </div>
    );
}
