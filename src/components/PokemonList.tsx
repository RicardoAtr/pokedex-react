import { IPokemonList } from "../interfaces/pokemon.interface";
import { PokemonCard } from "./PokemonCard";
import { useState } from "react";
import PokemonView from "./PokemonView";
interface PokemonListProps {
  pokemons: IPokemonList[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  const [openPokemonView, setOpenPokemonView] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonList | null>(
    null
  );

  const handlePokemonClick = (id: number) => {
    const clickedPokemon = pokemons.find((pokemon) => pokemon.id === id);
    if (clickedPokemon) {
      setSelectedPokemon(clickedPokemon);
      setOpenPokemonView(true);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 m-4">
      {pokemons.length > 0
        ? pokemons.map((p) => (
            <div
              key={p.pokedexNumber}
              className="max-w-full rounded overflow-hidden shadow-lg hover:bg-gray-200"
              id={p.pokedexNumber}
              onClick={() => handlePokemonClick(p.id)} // Call the handlePokemonClick function on click
            >
              <div className="pl-4 pt-4">
                <img
                  className="w-6 h-6 rounded-full shadow-lg"
                  src="src\assets\logoPokeball.png"
                  alt=""
                />
              </div>
              <div className="font-bold text-xl mb-2 flex flex-col items-center justify-center font-mono px-6 py-4 capitalize">
                <PokemonCard pokemon={p} />
              </div>
              {openPokemonView &&
                selectedPokemon &&
                selectedPokemon.id === p.id && (
                  <PokemonView pokemon={selectedPokemon} />
                )}
            </div>
          ))
        : null}
    </div>
  );
};

export default PokemonList;
