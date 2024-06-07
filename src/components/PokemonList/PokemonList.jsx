import React, { useContext } from 'react';
import { PokemonContext } from '../../services/PokemonContext';
import { PokemonCard } from '../../components';
import { Loader } from '../../components';
import "./style.scss";

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } = useContext(PokemonContext);

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className='card-list-pokemon container'>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<PokemonCard pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<PokemonCard pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};