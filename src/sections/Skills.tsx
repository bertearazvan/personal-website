import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import styled, { keyframes } from "styled-components";

const enter = keyframes`
	from { transform: translateY(18px); opacity: 0; }
	to { transform: translateY(0); opacity: 1; }
`;

const SkillCard = styled(Box)`
	text-align: center;
	padding: 32px;
	background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
	border-radius: 14px;
	border: 1px solid #c7c7c7;
	box-shadow: 0 12px 30px -6px rgba(50, 60, 80, 0.16);
	transition:
		transform 220ms ease,
		box-shadow 220ms ease;
	will-change: transform, box-shadow;
	animation: ${enter} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 26px 46px -8px rgba(50, 60, 80, 0.22);
	}

	@media (max-width: 900px) {
		padding: 24px;
	}
`;

const SkillIcon = styled.img`
	width: 90px;
	height: 90px;
	object-fit: contain;
	margin-bottom: 8px;
`;

const Skills: React.FC = () => {
	return (
		<Container sx={{ my: 24 }} id="destination3">
			<Typography
				variant="h4"
				sx={{ textAlign: "center", fontWeight: 600, color: "#3742fa", mb: 2 }}
			>
				Skills
			</Typography>

			<Grid container spacing={2} mt={10}>
				<Grid item xs={12} md={4}>
					<SkillCard>
						<SkillIcon src="/assets/img/coding.svg" alt="coding" />
						<Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
							Full-Stack Developer
						</Typography>
						<Typography sx={{ px: 6, mt: 1 }}>
							I build end-to-end web applications, from frontend interfaces to backend
							APIs and database architecture.
						</Typography>
						<Typography sx={{ mt: 2, color: "#3742fa", fontWeight: 600 }}>
							Technologies I work with
						</Typography>
						<Typography>
							React, Node.js, TypeScript, REST APIs, SQL, MongoDB, Azure, AWS, CI/CD
						</Typography>
					</SkillCard>
				</Grid>

				<Grid item xs={12} md={4}>
					<SkillCard>
						<SkillIcon src="/assets/img/design.svg" alt="geospatial" />
						<Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
							Geospatial & Data Visualization
						</Typography>
						<Typography sx={{ px: 6, mt: 1 }}>
							I specialize in building interactive map-based applications and
							visualizing complex earth observation and environmental data.
						</Typography>
						<Typography sx={{ mt: 2, color: "#3742fa", fontWeight: 600 }}>
							Experience includes
						</Typography>
						<Typography>
							Mapbox, Satellite data integration, Earth observation platforms, Marine
							vegetation mapping, Water quality monitoring
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
