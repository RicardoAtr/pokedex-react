import { useState, useEffect } from "react";
import {
  IndexedPokemon,
  IPokemonList,
  PokemonListResponse,
} from "../interfaces/pokemon.interface.tsx";
import axiosClient from "../conf/axiosClient.tsx";
import {
  POKEMON_IMAGE_BASE_URL,
  POKEMON_API_POKEMON_URL,
} from "../constants.ts";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemonList[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  useEffect(() => {
    fetchPokemons();
  }, []);

  const IndexedPokemonToPokemonList = (IndexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      IndexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
    );
    const pokemonList: IPokemonList = {
      name: IndexedPokemon.name,
      url: IndexedPokemon.url,
      image: `${POKEMON_IMAGE_BASE_URL}/${pokedexNumber}.png`,
      pokedexNumber: pokedexNumber.toString(),
    };
    return pokemonList;
  };

  const fetchPokemons = async () => {
    if (nextUrl) {
      const results = await axiosClient.get<PokemonListResponse>(nextUrl);
      if (results?.data?.results) {
        const pokemonList = results.data.results.map((pokemon) =>
          IndexedPokemonToPokemonList(pokemon)
        );
        setPokemons(pokemonList);
      }
    }
  };

  return {
    pokemons,
  };
};

export default usePokemons;
