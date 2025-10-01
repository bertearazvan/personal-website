import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import styled from "styled-components";

const SkillCard = styled(Box)`
	text-align: center;
	padding: 20px;
`;

const SkillIcon = styled.img`
	width: 90px;
`;

const Skills: React.FC = () => {
	return (
		<Container sx={{ my: 8 }} id="destination3">
			<Typography
				variant="h4"
				sx={{ textAlign: "center", fontWeight: 600, color: "#3742fa", mb: 2 }}
			>
				Skills
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{ textAlign: "center", color: "#3742fa", mb: 6 }}
			>
				Here are some of my skills that I am constantly improving on.
			</Typography>

			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<SkillCard>
						<SkillIcon src="/assets/img/design.svg" alt="design" />
						<Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
							Designer
						</Typography>
						<Typography sx={{ px: 6, mt: 1 }}>
							I value simple content structure, clean design patterns, and thoughtful
							interactions.
						</Typography>
						<Typography sx={{ mt: 2, color: "#3742fa", fontWeight: 600 }}>
							Things I enjoy designing
						</Typography>
						<Typography>UX, UI, Web and Mobile</Typography>
					</SkillCard>
				</Grid>

				<Grid item xs={12} md={4}>
					<SkillCard>
						<SkillIcon src="/assets/img/coding.svg" alt="coding" />
						<Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
							Web Developer
						</Typography>
						<Typography sx={{ px: 6, mt: 1 }}>
							I tend to code things from scratch, and enjoy bringing ideas to life on
							the web.
						</Typography>
						<Typography sx={{ mt: 2, color: "#3742fa", fontWeight: 600 }}>
							Languages I speak
						</Typography>
						<Typography>
							React.js, Svelte, Node.js, Sapper, Laravel, SQL, MongoDB, HTML, CSS,
							JavaScript, PHP
						</Typography>
					</SkillCard>
				</Grid>

				<Grid item xs={12} md={4}>
					<SkillCard>
						<SkillIcon src="/assets/img/cloud.svg" alt="cloud" />
						<Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
							DevOps enthusiast
						</Typography>
						<Typography sx={{ px: 6, mt: 1 }}>
							Building CI/CD pipelines for deploying the APIs and apps in an agile way.
						</Typography>
						<Typography sx={{ mt: 2, color: "#3742fa", fontWeight: 600 }}>
							I have experience with
						</Typography>
						<Typography>
							Azure DevOps & Portal, Azure serverless functions, AWS app deployments,
							GitOps
						</Typography>
					</SkillCard>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Skills;
