import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;
