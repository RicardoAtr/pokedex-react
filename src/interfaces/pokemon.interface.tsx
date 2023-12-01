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

export interface IPokemonList {
  name: string;
  url: string;
  image: string;
  pokedexNumber: string;
  id: number;
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonInfo {
  name: string;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStats[];
  weight: number;
  height: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
