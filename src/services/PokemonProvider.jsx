import { PokemonContext } from "./PokemonContext";
import React, { useEffect, useState } from 'react';
import {useForm} from "../hooks/useForm"

export const PokemonProvider = ({ children }) => {
    const [allPokemons, setAllPokemons] = useState([])
    const [offset, setOffset] = useState(0);

    const {valueSearch, onInputChange, onResetForm} = useForm({
        valueSearch: '',
    })

    const [loading, setLoading] = useState(true)
    const [active, setActive] = useState(false)
    
    const getListOfPokemons = async (limit = 151) => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        
        try {
            const response = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`);       
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            const promises = data.results.map(async(pokemon) => {
                const response = await fetch(pokemon.url)
                const data = await response.json()
                return data
            })
            const results = await Promise.all(promises)

            setAllPokemons([...allPokemons, ...results]);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    }

    const getPokemonById = async(id) => {
        const baseURL = 'https://pokeapi.co/api/v2/';

        const response = await fetch(`${baseURL}pokemon/${id}`)
        const data = await response.json()

        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        const englishFlavorText = speciesData.flavor_text_entries.find(
            entry => entry.language.name === 'en'
        ).flavor_text.replace(/\f/g, ' ');

        return { ...data, description: englishFlavorText };
    }

    useEffect(() => {
        getListOfPokemons();
    }, [offset]);

    const [filteredPokemons, setfilteredPokemons] = useState([]);
    
    return (
        <PokemonContext.Provider value={{ 
            valueSearch,
            onInputChange,
            onResetForm,
            allPokemons,
            getPokemonById,
            filteredPokemons
            }}>
            {children}
        </PokemonContext.Provider>
    );
}

