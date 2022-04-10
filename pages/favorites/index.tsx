import React, { useEffect } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui';
import { useState } from 'react';
import { localFavorites } from '../utils';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritesPage = () => {

    const [favorites, setFavorites] = useState<number[]>([])

    useEffect(() => {
        setFavorites(localFavorites.pokemons())
    }, [])

    return (
        <>
            <Layout title="Pokémons Favoritos">
                {
                    favorites.length === 0 && (
                        <NoFavorites />
                    ) || (
                        <FavoritePokemons favorites={favorites} />
                    )
                }
            </Layout>
        </>
    )
}

export default FavoritesPage