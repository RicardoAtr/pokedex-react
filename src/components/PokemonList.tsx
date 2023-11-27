import { IPokemonList } from "../interfaces/pokemon.interface";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: IPokemonList[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-4">
      {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
              <div
                key={p.pokedexNumber}
                className="max-w-full rounded overflow-hidden shadow-lg hover:bg-gray-200"
              >
                <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center font-mono px-6 py-4">
                  <PokemonCard pokemon={p} />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default PokemonList;
