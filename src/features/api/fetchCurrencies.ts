import axios from "axios";
import { useContext } from "react";
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";

const createApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const fetchCurrencies = async (
  queryType?: string,
  sort?: string,
  search?: string
) => {
  // createApi.get(params);

  return null;
};

export default fetchCurrencies;
