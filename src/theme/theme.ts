import { createTheme } from "@mui/material/styles";

export default createTheme({
	palette: {
		primary: {
			main: '#3742fa'
		},
		secondary: {
			main: '#5795FF'
		}
	},
	typography: {
		allVariants: {
			fontFamily: 'Raleway, sans-serif'
		},
		h1: {
			fontWeight: '600',
			fontSize: '2.5rem'
		},
		h2: {
			fontWeight: '400',
			fontSize: '2rem'
		},
		h3: {
			fontWeight: '400',
			fontSize: '1.7rem'
		}
	}
})