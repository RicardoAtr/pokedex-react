import { IndexedPokemon } from "../interfaces/pokemon";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: IndexedPokemon[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 content-around">
      {pokemons.length > 0
        ? pokemons.map((p) => {
            return (
              <>
                <div className="max-w-sm rounded overflow-hidden shadow-lg  ">
                  <div className="font-bold text-xl mb-2 flex items-center justify-center font-mono px-6 py-4">
                    <PokemonCard key={p.name} pokemon={p} />
                  </div>
                </div>
              </>
            );
          })
        : null}
    </div>
  );
};

export default PokemonList;
