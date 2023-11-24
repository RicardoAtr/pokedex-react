import { IPokemonList } from "../interfaces/pokemon.interface";
import { PokemonCard } from "./PokemonCard";

interface PokemonListProps {
  pokemons: IPokemonList[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4 ">
        {pokemons.length > 0
          ? pokemons.map((p) => {
              return (
                <>
                  <div className="max-w-full rounded overflow-hidden shadow-lg ">
                    <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center font-mono px-6 py-4 ">
                      <PokemonCard key={p.name} pokemon={p} />
                    </div>
                  </div>
                </>
              );
            })
          : null}
      </div>
    </>
  );
};

export default PokemonList;
