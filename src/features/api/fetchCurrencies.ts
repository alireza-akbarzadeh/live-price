import axios from "axios";

const createApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const fetchCurrencies = async (query?: any) => {
  let params = "currencies";
  if (query) {
    params =
      query.type === "search"
        ? `currencies?q=${query.params}`
        : query.type === "sort"
        ? `currencies?sort=${query.params}`
        : `currencies`;
  }
  return createApi.get(params);
};

export default fetchCurrencies;
