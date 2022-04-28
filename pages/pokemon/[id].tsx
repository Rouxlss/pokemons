import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import React from 'react'
import { Layout } from '../../components/layouts'
import { Pokemon } from '../../interfaces';
import { getPokemonInfo, localFavorites } from '../../utils';
import { useState } from 'react';
import confetti from 'canvas-confetti'

interface Props {
	pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

	const [favorite, setFavorite] = useState<boolean>(localFavorites.checkFavorite(pokemon.id))

	const onToggleFavorite = () => {

		localFavorites.toggleFavorite(pokemon.id);
		setFavorite(localFavorites.checkFavorite(pokemon.id))

		if( favorite) return

		confetti({
			zIndex: 999,
			particleCount: 100,
			spread: 160,
			angle: -100,
			origin: {
				x: 1,
				y: 0,
			}
		})

	}

	return (
		<Layout title={`#${pokemon.id} - ${pokemon.name}`}>
			<Grid.Container css={{
				marginTop: '5px'
			}} gap={2}>
				<Grid xs={12} sm={4} >
					<Card hoverable css={{ padding: '30px' }}>
						<Card.Body>
							<Card.Image src={pokemon.sprites.other?.dream_world.front_default || 'no-image'}
								alt={pokemon.name}
								width='100%'
								height={200}
							/>
						</Card.Body>
					</Card>
				</Grid>
				<Grid xs={12} sm={8}>
					<Card css={{ padding: '30px' }}>
						<Card.Header css={{ display: 'flex', justifyContent: 'space-between' }} style={{
							display: 'flex',
							flexWrap: 'wrap',
						}} >
							<Text h1 transform='capitalize' >{pokemon.name}</Text >
							<Button
								color='gradient'
								ghost={!favorite}
								onClick={onToggleFavorite}
							>{
								favorite ? 'Quitar de favoritos' : 'Añadir a favoritos'
							}</Button>
						</Card.Header>
						<Card.Body>
							<Text size={30}>Sprites:</Text>
							<Container direction='row' display='flex' gap={0}>
								<Image
									src={pokemon.sprites.front_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_default}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.front_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
								<Image
									src={pokemon.sprites.back_shiny}
									alt={pokemon.name}
									width={100}
									height={100}
								/>
							</Container>
						</Card.Body>
					</Card>
				</Grid>
			</Grid.Container>
		</Layout>
	)
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

	const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

	return {
		paths: pokemons151.map(id => ({
			params: { id }
		})),
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

	const { id } = params as { id: string };

	return {
		props: {
			pokemon: await getPokemonInfo(id)
		}
	}
}


export default PokemonPage