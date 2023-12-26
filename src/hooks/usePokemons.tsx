import { useState, useEffect } from "react";
import {
  IndexedPokemon,
  IPokemonList,
  PokemonInfo,
  PokemonListResponse,
} from "../interfaces/pokemon.interface.tsx";
import { ColorList } from "../interfaces/color.interface.tsx";
import axiosClient from "../conf/axiosClient.tsx";
import {
  POKEMON_IMAGE_BASE_URL,
  POKEMON_API_POKEMON_URL,
} from "../constants.ts";
import { pokemonTypeColor } from "../utils/pokemonTypeColor.tsx";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState<IPokemonList[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonList>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonInfo>();
  const [isSelectedPokemonOpen, setIsSelectedPokemonOpen] = useState(false);
  const [nextUrl, setNextUrl] = useState<string | null>(
    POKEMON_API_POKEMON_URL
  );

  const [pokemonColorList, setPokemonColorList] = useState<ColorList[]>();

  useEffect(() => {
    fetchPokemons();
    setPokemonColorList(pokemonTypeColor);
  }, []);

  const IndexedPokemonToPokemonList = (IndexedPokemon: IndexedPokemon) => {
    const pokedexNumber = parseInt(
      IndexedPokemon.url
        .replace(`${POKEMON_API_POKEMON_URL}/`, "")
        .replace("/", "")
    );
    const pokemonList: IPokemonList = {
      id: pokedexNumber,
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

        setPokemons([...pokemons, ...pokemonList]);
        setNextUrl(results.data.next);
      }
    }
  };

  const fetchPokemonInfo = async (id: number) => {
    const results = await axiosClient.get<PokemonInfo>(
      `${POKEMON_API_POKEMON_URL}/${id}`
    );
    if (results?.data) {
      setPokemonDetails(results.data);
      return;
    }
  };

  const handlePokemonClick = (id: number) => {
    const clickedPokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (clickedPokemon) {
      setSelectedPokemon(clickedPokemon);
      setIsSelectedPokemonOpen(true);
    }
  };

  const handleTypeColor = (type: String) => {
    const typeColor = pokemonColorList?.find(
      (color) => color.name === type
    )?.color;
    return typeColor;
  };

  return {
    pokemons,
    fetchNextPage: fetchPokemons,
    hasMorePokemons: !!nextUrl,
    handlePokemonClick,
    selectedPokemon,
    isSelectedPokemonOpen,
    pokemonDetails,
    fetchPokemonInfo,
    handleTypeColor,
  };
};

export default usePokemons;
