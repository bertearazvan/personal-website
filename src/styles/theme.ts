import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#3742fa",
		},
		background: {
			default: "#ffffff",
		},
	},
	typography: {
		fontFamily: ["Raleway", "sans-serif"].join(","),
		fontSize: 16, // Increased base font size from default 14
		body1: {
			fontSize: "1.1rem", // Larger body text
			"@media (max-width:600px)": {
				fontSize: "1.125rem", // Even larger on mobile
			},
		},
		body2: {
			fontSize: "1rem",
			"@media (max-width:600px)": {
				fontSize: "1.0625rem", // Slightly larger on mobile
			},
		},
		h4: {
			"@media (max-width:600px)": {
				fontSize: "1.75rem", // Larger h4 on mobile
			},
		},
		h5: {
			"@media (max-width:600px)": {
				fontSize: "1.5rem", // Larger h5 on mobile
			},
		},
		h6: {
			"@media (max-width:600px)": {
				fontSize: "1.35rem", // Larger h6 on mobile
			},
		},
	},
});

export default theme;
