import React, { createContext, useContext, useState } from "react";

//@types

export interface CurrencyContextType {
  setSort: (val: string) => void;
  sort: string;
  setSearch: (val: string) => void;
  search: string;
  queryType: string;
  setQueryType: (val: string) => void;
  page: number;
  setPage: (val: number) => void;
  currentCurrency: string;
  setCurrentCurrency: (val: string) => void;
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
  const [queryType, setQueryType] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [currentCurrency, setCurrentCurrency] = React.useState<string>("تومان");

  return (
    <CurrencyContext.Provider
      value={{
        search,
        page,
        setPage,
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