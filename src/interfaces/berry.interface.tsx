export interface IndexedBerry {
  name: string;
  url: string;
  // other properties
}

export interface BerryListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IndexedBerry[];
}

export interface IBerryList {
  name: string;
  url: string;
  image: string;
  berryId: string;
}
