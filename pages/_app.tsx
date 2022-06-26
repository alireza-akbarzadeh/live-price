// @React
import * as React from 'react';
// @Next
import type {AppProps} from 'next/app';
// @Theme
import ThemeConfig from "@styles/theme";
// @emotion cache for mui
import {EmotionCache} from '@emotion/react';
// @server-side state management
import {Hydrate, QueryClient, QueryClientProvider} from 'react-query'
// @utils
import createEmotionCache from '@utils/createEmotionCache';
// @assets
import "../src/assets/css/index.css"
// interfaceProps
interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
    const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
    const [queryClient] = React.useState(() => new QueryClient())

    return (
        <div dir={"rtl"}>
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeConfig>
                    {/*@ts-ignore}*/}
                    <Component {...pageProps} />
                </ThemeConfig>
            </Hydrate>
        </QueryClientProvider>
        </div>
    );
};

export default MyApp;