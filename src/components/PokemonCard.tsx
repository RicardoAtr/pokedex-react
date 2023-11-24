import { IndexedPokemon } from "../interfaces/pokemon";

interface PokemonCardProps {
  pokemon: IndexedPokemon;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return <div>{pokemon.name}</div>;
};
