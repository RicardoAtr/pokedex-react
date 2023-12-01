import usePokemons from "../hooks/usePokemons";
import PokemonList from "./PokemonList";
import InfiniteScroll from "react-infinite-scroll-component";

export const Pokemon = () => {
  const { pokemons, hasMorePokemons, fetchNextPage, fetchPokemons } =
    usePokemons();
  console.log(pokemons);
  return (
    <>
      {/* <PokemonList pokemons={pokemons}></PokemonList>;
      {hasMorePokemons ? (
        <button
          className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
          onClick={fetchNextPage}
        >
          Load More
        </button>
      ) : null} */}
      <div>
        <InfiniteScroll
          dataLength={pokemons.length}
          next={fetchNextPage}
          hasMore={hasMorePokemons} // Replace with a condition based on your data source
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          <ul>
            <PokemonList pokemons={pokemons}></PokemonList>
          </ul>
        </InfiniteScroll>
      </div>
    </>
  );
};
