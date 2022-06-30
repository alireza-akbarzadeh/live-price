import React, { createContext, useContext, useState } from "react";

//@types

export interface CurrencyContextType {
  setSort: (val: string) => void;
  sort: string;
  setSearch: (val: string) => void;
  search: string;
  queryType: string;
  setQueryType: (val: string) => void;
  meta: any;
  setMeta: (val: unknown) => void;
  currentCurrency: string;
  setCurrentCurrency: (val: string) => void;
  pageParam?: number;
}

//context
export const CurrencyContext =
  createContext<Partial<CurrencyContextType | undefined>>(undefined);

//@interface
interface IContextProps {
  children: React.ReactNode;
}

export function CurrencyProvider({ children }: IContextProps) {
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [queryType, setQueryType] = useState<string>("page");
  const [meta, setMeta] = useState<any>();
  const [currentCurrency, setCurrentCurrency] = React.useState<string>("تومان");

  return (
    <CurrencyContext.Provider
      value={{
        search,
        meta,
        setMeta,
        setSearch,
        queryType,
        setQueryType,
        setSort,
        sort,
        currentCurrency,
        setCurrentCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrencies = () => useContext(CurrencyContext);
