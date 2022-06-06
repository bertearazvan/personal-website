import React, { ElementType } from 'react'
import type { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import Head from 'next/head'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../src/theme/theme'
import createEmotionCache from '../src/theme/createEmotionCache'

// Client-side cache shared for the whole session
// of the user in the browser.

const clientSideEmotionCache = createEmotionCache()

interface Props {
	Component: ElementType
	emotionCache: EmotionCache
	pageProps: Record<string, unknown>
}

const App = (props: Props) => {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta content="initial-scale=1, width=device-width" name="viewport" />
			</Head>
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant,
                consistent, and simple baseline to
                build upon. */}

				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

export default App
