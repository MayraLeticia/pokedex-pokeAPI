import "./style.scss";
import { Layout, Loader } from "../../components";
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContext } from "../../services/PokemonContext";
import { useParams } from "react-router-dom";

import { primeiraMaiuscula } from "../../helper/helper";

const Pokemon = () => {
	const { getPokemonById } = useContext(PokemonContext);

	const [loading, setLoading] = useState(true)
	const [pokemon, setPokemon] = useState({})

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
			<main className='container main-pokemon'>
			{
				loading ? (
					<Loader />
				) : (
					<>
						<div className='column main-pokemon'>
							<div className='container-img-pokemon'>
								<img
									src={pokemon.sprites.other.dream_world.front_default}
									alt={`Pokemon ${pokemon?.name}`}
								/>
							</div>
						</div>
						<div className='column pokemon'>
							<h1>{primeiraMaiuscula(pokemon.name)} <span className='number-pokemon'># {pokemon.id}</span></h1>
							<div className='card-types info-pokemon-type'>
								{pokemon.types.map(type => (
									<span key={type.type.name} className={`${type.type.name}`}>
										{type.type.name}
									</span>
								))}
							</div>
							<div className='info-pokemon'>
								<div className='group-info'>
									<p>Altura</p>
									<span>{pokemon.height}</span>
								</div>
								<div className='group-info'>
									<p>Peso</p>
									<span>{pokemon.weight} Kg</span>
								</div>
							</div>
						</div>

						<div className='column stats-pokemon'>
							<h1>Características</h1>
							<div className='stats'>
								<div className='stat-group'>
									<span>Experiência</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[0].base_stat}
									</span>
								</div>
								<div className='stat-group'>
									<span>Ataque</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[1].base_stat}
									</span>
								</div>
								<div className='stat-group'>
									<span>Defesa</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[2].base_stat}
									</span>
								</div>
								<div className='stat-group'>
									<span>Ataque Especial</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[3].base_stat}
									</span>
								</div>
								<div className='stat-group'>
									<span>Defesa Especial</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[4].base_stat}
									</span>
								</div>
								<div className='stat-group'>
									<span>Velocidade</span>
									<div className='progress-bar'></div>
									<span className='counter-stat'>
										{pokemon.stats[5].base_stat}
									</span>
								</div>
							</div>
						</div>
					</>
				)
			}

			  <div>
                <button onClick ={()=> window.history.back()}>
                    {'< Voltar'}

                </button>
            </div>
			</main>
		</Layout>

	);
};

export default Pokemon;