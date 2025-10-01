import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Header from "./components/Header";
import Hero from "./sections/Hero";

const StyledApp = styled("div")``;

const App: React.FC = () => {
	return (
		<StyledApp>
			<Container maxWidth="lg">
				<Header />
				<Hero />
			</Container>
		</StyledApp>
	);
};

export default App;
