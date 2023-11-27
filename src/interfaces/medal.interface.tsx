export interface IndexedMedal {
  name: string;
  url: string;
  // other properties
}

export interface MedalListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedMedal[];
}

export interface IMedalList {
  name: string;
  url: string;
  image: string;
  medalId: string;
}
