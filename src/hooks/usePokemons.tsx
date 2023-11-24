import { useState, useEffect } from "react";
import { POKEMON_API_POKEMON_URL } from "../constants.ts";
import { IndexedPokemon, PokemonListResponse } from "../interfaces/pokemon.tsx";
import axiosClient from "../conf/axiosClient.tsx";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<IndexedPokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  useEffect(() => {
    fetchPokemons();
  }, []);
  const fetchPokemons = async () => {
    if (nextUrl) {
      const results = await axiosClient.get<PokemonListResponse>(nextUrl);
      if (results?.data?.results) {
        setPokemons(results.data.results);
      }
    }
  };

  return {
    pokemons,
  };
};

export default usePokemons;
