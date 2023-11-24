export interface IndexedPokemon {
  name: string;
  url: string;
  // other properties
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedPokemon[];
}
