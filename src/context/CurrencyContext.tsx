import React, { createContext, useContext, useState } from "react";
//Socket
import socketio from "socket.io-client";

export const SOCKET_URL = `https://api.bitbarg.me/api/v1/currencies`;

//@types
export interface IQueryProps {
  type: string;
  params: string;
}

export interface CurrencyContextType extends IQueryProps {
  SOCKET_URL: string;
  setQuery: (query: IQueryProps) => void;
  query?: IQueryProps;
  currentCurrency: string;
  setCurrentCurrency: (val: string) => void;
}

//@interface
interface IContextProps {
  children: React.ReactNode;
}

//context
export const CurrencyContext =
  createContext<Partial<CurrencyContextType | undefined>>(undefined);

export function CurrencyProvider({ children }: IContextProps) {
  const [query, setQuery] = useState<IQueryProps>({
    params: "",
    type: "",
  });
  const [currentCurrency, setCurrentCurrency] = React.useState<string>("تومان");

  return (
    <CurrencyContext.Provider
      value={{
        query,
        setQuery,
        SOCKET_URL,
        currentCurrency,
        setCurrentCurrency,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrencies = () => useContext(CurrencyContext);
