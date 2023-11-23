import Pokemon from "../types/Pokemon.tsx";
import { useState, useEffect } from "react";
import fetchPokemonData from "../services/pokemonApi";

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const buscar = "/pokemon?limit=20";
  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonData(buscar);
      setPokemonData(data);
    }
    fetchData();
  }, []);
  return (
    <ul>
      {pokemonData.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default PokemonList;
