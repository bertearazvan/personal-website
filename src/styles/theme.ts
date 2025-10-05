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
	},
});

export default theme;
