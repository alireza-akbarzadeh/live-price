// @React
import React, {useMemo} from "react";
// @material
import {CssBaseline} from '@mui/material';
import {ThemeProvider, createTheme, StyledEngineProvider} from '@mui/material/styles';
// @emotion
import {CacheProvider, EmotionCache} from '@emotion/react';
import createCache from '@emotion/cache';
// third party for ltr
import rtlPlugin from "stylis-plugin-rtl";
// third multi language
import {useTranslation} from "react-i18next";
import {prefixer} from "stylis";
// files
import palette from './palette';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, {customShadows} from './shadows';
// @fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import createEmotionCache from '@utils/createEmotionCache';
import lightThemeOptions from '@styles/theme/lightThemeOption';
const clientSideEmotionCache = createEmotionCache();

// ----------------------------------------------------------------------

// Create rtl cache
const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
    key: 'muiltr',
    stylisPlugins: [],
});

// @interFace
interface IThemeProps {
    children?: React.ReactNode
}

const ThemeConfig: React.FunctionComponent<IThemeProps> = ({children}) => {
    const themeOptions = useMemo(
        () => ({
            palette,
            lightThemeOptions,
            shape: {borderRadius: 8},
            typography,
            shadows,
            customShadows
        }),
        []
    );
    //@ts-ignore
    let theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);
    const {t} = useTranslation();
    const dir = t('dir') === "rtl";
    return (
        <StyledEngineProvider injectFirst>
            <CacheProvider value={dir ? cacheRtl : cacheLtr}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    {children}
                </ThemeProvider>
            </CacheProvider>
        </StyledEngineProvider>
    );
};

export default ThemeConfig;