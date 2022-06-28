// @React
import * as React from "react";
// @Next
import type { AppProps } from "next/app";
// @Theme
import ThemeConfig from "@styles/theme";
// @emotion cache for mui
import { EmotionCache } from "@emotion/react";
// @utils
import createEmotionCache from "@utils/createEmotionCache";
// @assets
import "../src/assets/css/index.css";
// @components
import { Header } from "@components";
// @context
import { CurrencyProvider } from "@context";
// @css
import "../src/styles/globale.module.css";
// interfaceProps
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <div dir={"rtl"}>
      <CurrencyProvider>
        <ThemeConfig>
          <Header />
          {/*@ts-ignore}*/}
          <Component {...pageProps} />
        </ThemeConfig>
      </CurrencyProvider>
    </div>
  );
};

export default MyApp;
