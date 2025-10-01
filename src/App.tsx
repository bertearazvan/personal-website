import React from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const StyledApp = styled("div")``;

const App: React.FC = () => {
	return (
		<StyledApp>
			<Container maxWidth="lg">
				<Header />
				<Hero />
			</Container>

			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</StyledApp>
	);
};

export default App;
