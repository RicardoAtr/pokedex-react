import { IPokemonList } from "../interfaces/pokemon.interface";

interface PokemonCardProps {
  pokemon: IPokemonList;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <>
      <div>
        <img
          className="p-8 rounded-t-lg"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <div>{pokemon.name}</div>
    </>
  );
};
