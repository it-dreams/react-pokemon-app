import axios from "axios";

const URL = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemons = () => {
    return axios.get(URL)
        .then((response) => response);
};

