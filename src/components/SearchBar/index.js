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
            setError('Pokemon not found. Please try again.');
            setPokemon(null);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter Pokemon name or number"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {pokemon && (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <p>Type: {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                </div>
            )}
        </div>
    );
};

export default SearchBar;

//copiado do gpt, não li ainda, ajeito depois.