import axios, { AxiosInstance } from "axios";
import { POKEMON_API_BASE_URL } from "../constants";

const BASE_URL = POKEMON_API_BASE_URL;

const axiosClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosClient;
