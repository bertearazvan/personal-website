import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '../src/theme/theme'
import createEmotionCache from '../src/theme/createEmotionCache'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* PWA primary color */}
					<meta content={theme.palette.primary.main} name="theme-color" />
					<link href="/static/favicon.ico" rel="shortcut icon" />
					<link href="https://fonts.googleapis.com" rel="preconnect" />
					<link href="https://fonts.gstatic.com" rel="preconnect" />
					<link
						href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
					{/* Inject MUI styles first to match with the prepend: true configuration. */}
					{this.props.emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage

	// You can consider sharing the same emotion cache between
	// all the SSR requests to speed up performance.
	// However, be aware that it can have global side effects.

	const cache = createEmotionCache()
	const { extractCriticalToChunks } = createEmotionServer(cache)

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) =>
				function EnhanceApp(props) {
					return <App emotionCache={cache} {...props} />
				},
		})

	const initialProps = await Document.getInitialProps(ctx)

	// This is important. It prevents emotion to render invalid HTML.
	// See
	// https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153

	const emotionStyles = extractCriticalToChunks(initialProps.html)
	const emotionStyleTags = emotionStyles.styles.map((style) => (
		<style
			dangerouslySetInnerHTML={{ __html: style.css }}
			data-emotion={`${style.key} ${style.ids.join(' ')}`}
			// eslint-disable-next-line react/no-danger
			key={style.key}
		/>
	))

	return {
		...initialProps,
		emotionStyleTags,
	}
}
