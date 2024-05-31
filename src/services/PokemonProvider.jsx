import { PokemonContext } from "./PokemonContext";
import React, { useEffect, useState } from 'react';

export const PokemonProvider = ({ children }) => {
    const [offset, setOffset] = useState(0);

    const getListOfPokemons = async (limit = 50) => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        
        try {
            const response = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    }

    useEffect(() => {
        getListOfPokemons();
    }, [offset]);
    
    return (
        <PokemonContext.Provider value={{ numero: 0 }}>
            {children}
        </PokemonContext.Provider>
    );
}

