import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui';
import {useState} from 'react';

interface Props {
	title?: string;
	spriteId?: string
}

export const Layout: FC<Props> = ({ children, title, spriteId }) => {

	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='author' content='Arnoldo Ortíz' />
				<meta name="description" content="Información sobre el pokémon XXXXX" />
				<meta name="keywords" content="XXXX, pokemon, pokedex" />
				<link rel="shortcut icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png" type="image/x-icon" />
			</Head>

			<Navbar spriteId={spriteId} />

			<main style={{
				padding: '0 20px'
			}}>
				{children}
			</main>
		</>
	)
}
