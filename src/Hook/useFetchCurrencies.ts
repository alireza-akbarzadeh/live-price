// @React
import React, { useContext } from "react";
// @React-query
import { useInfiniteQuery } from "react-query";
// @context
import { CurrencyContext, CurrencyContextType } from "@context/CurrencyContext";

export const useFetchCurrencies = () => {
  const { queryType, search, sort } = useContext(
    CurrencyContext
  ) as CurrencyContextType;

  return useInfiniteQuery(
    "currencies",
    async ({ pageParam = 1 }) => {
      let params = `currencies?page=${pageParam}`;
      if (queryType) {
        params =
          queryType === "search"
            ? `currencies?q=${search}`
            : queryType === "sort"
            ? `currencies?sort=${sort}`
            : `currencies?page=${pageParam}`;
      }
      return await fetch(`https://api.bitbarg.me/api/v1/${params}`).then(
        (result) => result.json()
      );
    },
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage) {
          return pages.length + 1;
        }
      },
      keepPreviousData: true,
    }
  );
};
