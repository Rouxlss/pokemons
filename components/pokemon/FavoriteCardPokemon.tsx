import React from 'react'
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Grid, Card } from '@nextui-org/react'

interface Props {
    id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({id}) => {

    const router = useRouter();

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`)
    }
    
    return (
        <Grid key={id} xs={6} sm={3} md={2} lg={1} onClick={onFavoriteClicked}>
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image width={'100%'} height={140} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} />
            </Card>
        </Grid>
    )
}
