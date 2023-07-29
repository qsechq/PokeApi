import { makeRequest } from '../requests'

export const getPokemons = () => {
    return makeRequest({
        url: '/pokemon/'
    })
}

export const getPokemonByList = (url) => {
    return makeRequest({
        url: `${url}`
    })
}

export const getPokemonById = (id) => {
    return makeRequest({
        url: `/pokemon/${id}`
    })
}

