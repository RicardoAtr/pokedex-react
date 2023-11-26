import usePokemons from "../hooks/usePokemons";
import PokemonList from "./PokemonList";
import useBerries from "../hooks/useBerries";
import { BerryList } from "./BerryList";

export const Hero = () => {
  const { pokemons } = usePokemons();
  return <PokemonList pokemons={pokemons}></PokemonList>;
};

export const Hero2 = () => {
  const { berries } = useBerries();
  return <BerryList berries={berries}></BerryList>;
};
