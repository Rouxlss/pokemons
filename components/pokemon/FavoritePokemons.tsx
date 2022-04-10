import { Grid, Card } from '@nextui-org/react'
import React, { FC } from 'react'
import { FavoriteCardPokemon } from './FavoriteCardPokemon'

interface Props {
    favorites: number[];
}

export const FavoritePokemons: FC<Props> = ({favorites}) => {
    return (
        <Grid>
            <Grid.Container gap={2} direction='row' justify='flex-start'>
                {
                    favorites.map((id) => (
                        <FavoriteCardPokemon key={id} id={id}/>
                    ))
                }
            </Grid.Container>
        </Grid>
    )
}
