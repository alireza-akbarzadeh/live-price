// @React
import React from "react";
// @react-query
import {useQuery} from "react-query";
// @mui/material
import {Box} from "@mui/material";
// @components
import {Header, Main} from "@components";
// @features
import fetchCurrencies from "@features/api/fetchCurrencies";

// @render
export async function getStaticProps() {
    const currencies = await fetchCurrencies()
    return {props: currencies.data.result}
}

// @JSX
const Home: React.FC = (props) => {
    // @ts-ignore
    const {data} = useQuery('currencies', () => fetchCurrencies("q=Bitcoin"), {initialData: props.items})
    console.log(data, "data")
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            <Header/>
            <Main/>
        </Box>
    );
};

export default Home;
