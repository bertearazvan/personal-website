import React from "react";
import { Box, Typography, Container } from "@mui/material";
import styled from "styled-components";

const MainDiv = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin: 0% 12%;
	position: relative;
	padding-top: 1rem;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
		margin: 0;
	}
`;

const AboutCard = styled.div`
	background-color: rgba(255, 255, 255, 0.95);
	z-index: 1;
	height: fit-content;
	margin: 12% auto; /* reduced top margin for better visual balance */
	border-radius: 15px;
	border: 2px solid #3742fa;
	box-shadow: 0px 10px 25px -2px rgba(199, 199, 199, 1);
	padding: 4.5rem 0;
	margin-top: 132px;

	@media (max-width: 1200px) {
		margin: 8% auto;
		padding: 3rem 0;
	}
`;

const AvatarWrapper = styled.div`
	margin: 0 auto;
	width: 300px;
	padding-top: 100px;

	@media (max-width: 600px) {
		width: 200px;
		padding-top: 20px;
	}
`;

const AvatarImg = styled.img`
	width: 100%;
	filter: grayscale(0%);
`;

const DescriptionText = styled(Typography)`
	margin-top: 10px !important;
	background-color: rgba(0, 0, 0, 0);
	color: black;
	font-family: Raleway, sans-serif;
	font-size: 1.1rem;
`;

const Hero: React.FC = () => {
	return (
		<MainDiv>
			<Container sx={{ textAlign: "center" }}>
				<Box sx={{ mt: 4 }}>
					<AvatarWrapper>
						<AvatarImg src="/assets/img/avatar.svg" alt="avatar" />
					</AvatarWrapper>
				</Box>
				<Typography
					variant="h1"
					component="h1"
					sx={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, mt: 4 }}
				>
					Web Developer
				</Typography>
				<Typography
					variant="h5"
					component="h2"
					sx={{ fontFamily: "Raleway, sans-serif", fontWeight: 400 }}
				>
					I like to code, design & enjoy life
				</Typography>
			</Container>

			<AboutCard>
				<Container sx={{ maxWidth: "100%", width: "95%", textAlign: "left" }}>
					<Typography variant="h4" sx={{ fontWeight: 600, color: "#3742fa" }}>
						Hi! I'm Razvan
					</Typography>
					<DescriptionText variant="body1">
						I am passionate and enthusiastic about coding, with a creative flair.
					</DescriptionText>
					<Typography variant="body1" sx={{ mt: 1 }}>
						<strong style={{ fontWeight: 600, color: "#3742fa" }}>
							Web developer
						</strong>
						, excited for opportunities within the open-source community and
						contributing to projects that serve a meaningful cause.
					</Typography>
					<Typography variant="body1" sx={{ mt: 1 }}>
						Continuously growing my professional knowledge by looking for and creating
						new experiences.
					</Typography>
				</Container>
			</AboutCard>
		</MainDiv>
	);
};

export default Hero;
