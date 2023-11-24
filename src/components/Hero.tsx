import usePokemons from "../hooks/usePokemons";
import PokemonList from "./PokemonList";

const Hero = () => {
  const { pokemons } = usePokemons();
  return <PokemonList pokemons={pokemons}></PokemonList>;
};
export default Hero;
