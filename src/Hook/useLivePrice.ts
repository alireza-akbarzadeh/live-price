import React, { useState } from "react";

export function useLivePrice() {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  return {
    query,
    search,
    sort,
    pageNumber,
    setPageNumber,
    setQuery,
    setSearch,
    setSort,
  };
}
