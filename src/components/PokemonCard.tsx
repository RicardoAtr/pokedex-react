import { IPokemonList } from "../interfaces/pokemon.interface";

interface PokemonCardProps {
  pokemon: IPokemonList;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <>
      <div >
        <img
          className="p-8 rounded-t-lg"
          src={pokemon.image}
          alt={pokemon.name}
        />
      </div>
      <div className="font-bold text-xl mb-2 capitalize">{pokemon.name}</div>
    </>
  );
};
