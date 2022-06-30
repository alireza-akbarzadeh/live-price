// @React
import { useEffect, useState } from "react";
// @third-party
import axios from "axios";
// @interface
import { Currencies } from "../interface/Currencies";

// @function
export function useCurrencies(
  query: string,
  pageNumber: number,
  search: string,
  sort: string,
  queryType: string,
  setMeta: (val: unknown) => void
) {
  const [loading, setLoading] = useState<boolean | undefined>(true);
  const [error, setError] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<Currencies[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);
  // @initial-data
  useEffect(() => {
    setCurrencies([]);
  }, [query]);
  // @create-params
  let createParams: string | null =
    queryType === "search"
      ? `&q=${search}`
      : queryType === "sort"
      ? `&sort=${sort}`
      : "";

  // @fetch-api
  useEffect(() => {
    setLoading(true);
    setError(false);
    //@ts-ignore
    let cancel;
    axios({
      method: "GET",
      url: `https://api.bitbarg.me/api/v1/currencies?page=${pageNumber}${createParams}`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (queryType === "search") {
          setCurrencies(res.data.result.items);
          setMeta(res.data.result.meta);
        }
        if (queryType === "sort") {
          setCurrencies(res.data.result.items);
          setMeta(res.data.result.meta);
        }
        if (queryType === "page") {
          setMeta(res.data.result.meta);
          setCurrencies((state: any) => {
            //@ts-ignore
            return [...new Set([...state, ...res.data.result.items])];
          });
        }
        // console.log(res.data.result.meta.paginationHelper.total)
        setHasMore(
          res.data.result.meta.paginateHelper.total > currencies.length + 20
        );
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    //@ts-ignore
    return () => cancel();
    // query, pageNumber
  }, [query, search, pageNumber, sort]);

  return { loading, error, currencies, hasMore };
}
