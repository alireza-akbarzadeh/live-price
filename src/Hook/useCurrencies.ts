import { useEffect, useState } from "react";
import axios from "axios";
export default function useCurrencies(
  query: string,
  pageNumber: number,
  search: string,
  sort: string,
  queryType: string
) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [currencies, setCurrencies] = useState<any>([]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  useEffect(() => {
    setCurrencies([]);
  }, [query]);
  let createParams: string | null =
    queryType === "search"
      ? `&q=${search}`
      : queryType === "sort"
      ? `&sort=${sort}`
      : "";

  console.log(pageNumber, "pagesParams");
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
        setCurrencies((state: any) => {
          //@ts-ignore
          return [...new Set([...state, ...res.data.result.items])];
        });
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
  }, [query, sort, search, pageNumber]);

  return { loading, error, currencies, hasMore };
}
