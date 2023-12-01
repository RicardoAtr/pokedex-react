import usePokemons from "../hooks/usePokemons";
import PokemonList from "./PokemonList";
import InfiniteScroll from "react-infinite-scroll-component";

export const Pokemon = () => {
  const { pokemons, hasMorePokemons, fetchNextPage } = usePokemons();
  return (
    <>
      <InfiniteScroll
        dataLength={pokemons.length}
        next={fetchNextPage}
        hasMore={hasMorePokemons} // Replace with a condition based on your data source
        loader={<p>Loading...</p>}
      >
        <ul>
          <PokemonList pokemons={pokemons}></PokemonList>
        </ul>
      </InfiniteScroll>
    </>
  );
};
