import React from 'react';
import {capitalizeFirstLetter, formatPokemonId} from "../../helper/helper"
import { Link, Type } from "../../components";
import "./style.scss";

export const PokemonCard = ({ pokemon }) => {


	return (
		<Link href={`/pokemon/${pokemon.id}`}>
			<div className='pokemon-card'>
				<div className='card-img'>
					<img
						src={pokemon.sprites.front_default}
						alt={`Pokemon ${pokemon.name}`}
					/>
				</div>
				<div className='card-info'>
					<div className='pokemon-info'>
						<p className='pokemon-id'>#{formatPokemonId(pokemon.id)}</p>
						<label>{capitalizeFirstLetter(pokemon.name)}</label>
					</div>
					<div className='pokemon-types'>
						<Type pokemon={pokemon} />
						{/* {pokemon.types.map(type => (
							<span key={type.type.name} className={type.type.name}>{capitalizeFirstLetter(type.type.name)}</span>
						))} */}
					</div>
				</div>
			</div>
		</Link>
	);
};