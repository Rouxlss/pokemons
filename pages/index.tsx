import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts/'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonContainer } from '../components/pokemon/PokemonContainer'
import { useState } from 'react'
import { Image } from '@nextui-org/react'

interface Props {
	pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons}) => {

	return (
		<>
			<Layout title="Listado de Pokémons" >
				<Image src='/img/wpp.jpg' width={200} height={150}></Image>
				<PokemonContainer pokemons={pokemons}/>
			</Layout>
		</>
	)
}

export const getStaticProps: GetStaticProps = async ({params}) => {

	const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

	const pokemons: SmallPokemon[] = data.results.map((data, index) => ({
		...data,
		id: index + 1,
		img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
	}))

	return {
		props: {
			pokemons,
		}
	}
}

export default HomePage
