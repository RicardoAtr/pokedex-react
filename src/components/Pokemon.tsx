import usePokemons from "../hooks/usePokemons";
import PokemonList from "./PokemonList";

export const Pokemon = () => {
  const { pokemons } = usePokemons();
  return <PokemonList pokemons={pokemons}></PokemonList>;
};
