import "./style.scss";
import { Layout, Loader, Type, Weaknesses } from "../../components";
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from "../../services/PokemonContext";
import { useParams } from "react-router-dom";
import BackIcon from "../../assets/Back.svg";

import {capitalizeFirstLetter, formatPokemonId} from "../../helper/helper"

const Pokemon = () => {
	const { getPokemonById } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true);
	const [pokemon, setPokemon] = useState({});

	const { id } = useParams()

	const fetchPokemon = async () => {
		const data = await getPokemonById(id)
		setPokemon(data)
		setLoading(false)
	}

	useEffect(() => {
		fetchPokemon(id)
	}, [])

	console.log(pokemon);

	return (
		<Layout>
			<div className='pokemon-container'>
				<div>
					<button className="back-btn" onClick ={()=> window.history.back()}><img src={BackIcon} alt="Back" /></button>
				</div>
			{
				loading ? (
					<Loader />
				) : (
					<>
						{/* //imagem */}
						<div className='pokemon-img'>
							<img
								src={pokemon.sprites.other.dream_world.front_default}
								alt={`Pokemon ${pokemon?.name}`}
							/>
						</div>
						
						<div className='pokemon-data'>
							<div className='pokemon-info'>
								<p className='pokemon-id'>#{formatPokemonId(pokemon.id)}</p>
								<label>{capitalizeFirstLetter(pokemon.name)}</label>
							</div>
							<div className='pokemon-body'>
								<div className='info-group'>
									<label>Altura</label>
									<p>{pokemon.height} m</p>
								</div>
								<div className='info-group'>
									<label>Peso</label>
									<p>{pokemon.weight} Kg</p>
								</div>
							</div>
						</div>

						<div className="pokemon-description">
							<label>Descrição</label>
							<p>{capitalizeFirstLetter(pokemon.description)}</p>
						</div>
					

						<div className='pokemon-types'>
							<label>Tipo</label>
							<div className="types-group">
								<Type pokemon={pokemon} />
							</div>
						</div>

						<div className='pokemon-types'>
							<label>Fraquesas</label>
							<div className="types-group">
								<Weaknesses pokemon={pokemon} />
							</div>
						</div>

						

						<div className='pokemon-stats'>
							<label>Status</label>
							<div className='stats'>
								<div className='stat-group'>
									<span>HP: </span>
									<span className='counter-stat'>
										{pokemon.stats[0].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
								<div className='stat-group'>
									<span>ATK: </span>
									<span className='counter-stat'>
										{pokemon.stats[1].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
								<div className='stat-group'>
									<span>DEF: </span>
									<span className='counter-stat'>
										{pokemon.stats[2].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
								<div className='stat-group'>
									<span>SP. ATK: </span>
									<span className='counter-stat'>
										{pokemon.stats[3].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
								<div className='stat-group'>
									<span>SP. DEF: </span>
									<span className='counter-stat'>
										{pokemon.stats[4].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
								<div className='stat-group'>
									<span>SPEED: </span>
									<span className='counter-stat'>
										{pokemon.stats[5].base_stat}
									</span>
									<div className='progress-bar'></div>
								</div>
							</div>
						</div>
					</>
				)
			}
			</div>
		</Layout>

	);
};

export default Pokemon;