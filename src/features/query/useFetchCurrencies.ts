import React from 'react';
import {useQuery} from "react-query";


const useFetchCurrencies = (query: string) => {
    // @ts-ignore
    return useQuery('currencies', () => fetchCurrencies(query))
};

export default useFetchCurrencies;
