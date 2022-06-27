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
  let params = "currencies";
  if (queryType) {
    params =
      queryType === "search"
        ? `currencies?q=${search}`
        : queryType === "sort"
        ? `currencies?sort=${sort}`
        : `currencies`;
  }
  return createApi.get(params);
};

export default fetchCurrencies;
