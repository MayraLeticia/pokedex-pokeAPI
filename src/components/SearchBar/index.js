import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
            setPokemon(response.data);
            setError('');
        } catch (err) {
            setError('Pokemon não encontrado. Por favor, tente novamente.');
            setPokemon(null);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Procure pelo nome ou numero"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {pokemon && (
                <div>
                    <p>{pokemon.game_indices}</p>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;

//copiado do gpt, não li ainda, ajeito depois.