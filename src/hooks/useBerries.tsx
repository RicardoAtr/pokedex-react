import axiosClient from "../conf/axiosClient";
import { POKEMON_API_POKEMON_URL } from "../constants";
import { useState, useEffect } from "react";
import {
  IndexedBerry,
  IBerryList,
  BerryListResponse,
} from "../interfaces/berry.interface";
import { BERRY_IMAGE_BASE_URL, BERRY_API_BASE_URL } from "../constants";

export const useBerries = () => {
  const [berries, setBerries] = useState<IBerryList[]>([]);
  const [nextUrl, setNextUrl] = useState<string | null>(BERRY_API_BASE_URL);

  useEffect(() => {
    fetchBerries();
  }, []);

  const IndexedBerryList = (IndexedBerry: IndexedBerry) => {
    const berryId = parseInt(
      IndexedBerry.url.replace(`${BERRY_API_BASE_URL}/`, "").replace("/", "")
    );
    const berryList: IBerryList = {
      name: IndexedBerry.name,
      url: IndexedBerry.url,
      image: `${BERRY_IMAGE_BASE_URL}/${IndexedBerry.name}-berry.png`,
      berryId: berryId.toString(),
    };
    return berryList;
  };
  const fetchBerries = async () => {
    if (nextUrl) {
      const results = await axiosClient.get<BerryListResponse>(nextUrl);
      if (results?.data?.results) {
        const berryList = results.data.results.map((berry) =>
          IndexedBerryList(berry)
        );
        setBerries(berryList);
      }
    }
  };
  return {
    berries,
  };
};

export default useBerries;
