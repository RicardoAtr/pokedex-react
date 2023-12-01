import { IPokemonList } from "../interfaces/pokemon.interface";

interface PokemonViewProps {
  pokemon: IPokemonList;
}

export const PokemonView = ({ pokemon }: PokemonViewProps) => {
  return (
    <>
      <div>
        <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
        <img
          className="p-8 rounded-t-lg"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
    </>
  );
};
