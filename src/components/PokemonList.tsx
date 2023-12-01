import { IPokemonList } from "../interfaces/pokemon.interface";
import { PokemonCard } from "./PokemonCard";
import { useState } from "react";
import { PokemonView } from "./PokemonView";
import Example from "./TestModal";

interface PokemonListProps {
  pokemons: IPokemonList[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  const [openPokemonView, setOpenPokemonView] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-4"
        onClick={() => setOpenModal(true)}
      >
        {pokemons.length > 0
          ? pokemons.map((p) => (
              <div
                key={p.pokedexNumber}
                className="max-w-full rounded overflow-hidden shadow-lg hover:bg-gray-200"
              >
                <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center font-mono px-6 py-4 capitalize">
                  <PokemonCard pokemon={p} />
                  {openModal && <Example pokemon={p} />}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default PokemonList;
