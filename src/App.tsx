import React from 'react'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'
import AppScreen from './AppScreen'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<AppScreen />
		</ThemeProvider>
	)
}

export default App
