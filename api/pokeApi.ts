import axios from 'axios'

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

// pokeApi.get('/pokemon')

export default pokeApi;