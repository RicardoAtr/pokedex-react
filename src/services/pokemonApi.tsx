import axiosClient from "../conf/axiosClient";

export const fetchPokemonData = async (parametros:string): Promise<any> => {
  try {
    const response = await axiosClient.get(parametros);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchPokemonData;
