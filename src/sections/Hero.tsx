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
	margin: 8% auto; /* reduced top margin for better visual balance */
	border-radius: 15px;
	border: 2px solid #3742fa;
	box-shadow: 0px 10px 25px -2px rgba(199, 199, 199, 1);
	padding: 3.5rem 0;
	margin-top: 92px;

	@media (max-width: 1200px) {
		margin: 6% auto;
		padding: 2.5rem 1rem;
		width: 90%;
	}
`;

const AvatarWrapper = styled.div`
	margin: 0 auto;
	width: 280px;
	padding-top: 80px;

	@media (max-width: 600px) {
		width: 180px;
		padding-top: 12px;
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
					sx={{
						fontFamily: "Raleway, sans-serif",
						fontWeight: 600,
						mt: 4,
						fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
					}}
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
						Senior Software Developer at Saxo Bank, passionate about building scalable
						web applications and solving complex technical challenges.
					</DescriptionText>
					<Typography variant="body1" sx={{ mt: 1 }}>
						Experienced in full-stack development, geospatial data visualization, and
						cloud infrastructure. I enjoy contributing to meaningful projects and
						continuously growing my technical expertise.
					</Typography>
				</Container>
			</AboutCard>
		</MainDiv>
	);
};

export default Hero;
