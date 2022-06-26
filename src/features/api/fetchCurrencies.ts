import axios from "axios"

const createApi = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})


const fetchCurrencies = async (query?: string) => {
    let params = !query ? "currencies" : `currencies?${query}`
    return createApi.get(params)
}

export default fetchCurrencies;