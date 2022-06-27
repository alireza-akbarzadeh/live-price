// @React
import React, { useContext } from "react";
// @React-query
import { useQuery } from "react-query";
// @React-features
import fetchCurrencies from "@features/api/fetchCurrencies";
// @context
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";

export const useFetchCurrencies = () => {
  const { query } = useContext(CurrencyContext) as CurrencyContextType;
  return useQuery("currencies", () => fetchCurrencies(query), {});
};
