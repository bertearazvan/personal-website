import React, { useState } from "react";
import { Container, Grid, Box, Typography, Chip } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type Project = {
	name: string;
	src?: string;
	desc?: string;
	legacy?: boolean;
	icons?: string[];
	link?: string;
	// optional explicit contributions array — when present we render the contributions toggle
	contributions?: string[];
	// some project objects include legacy/misspelled responsibility fields from imports
	responsabilities?: string[];
	resonsabilities?: string[];
};
import styled, { keyframes } from "styled-components";

const projects: Project[] = [
	{
		name: "Scrooge dashboard",
		src: "/assets/img/scrooge_dashboard.png",
		desc:
			"Scrooge dashboard is a project created in collaboration with DHI GRAS for providing business insights and quota administrtation tools for their metering workflows.",
		legacy: true,
		icons: [
			"/assets/icons/react.png",
			"/assets/icons/materialui.png",
			"/assets/icons/mapbox.png",
			"/assets/icons/node.png",
			"/assets/icons/uxui.png",
			"/assets/icons/azure.jpg",
		],
	},
	{
		name: "Clonebook",
		src: "/assets/img/clonebook.png",
		desc:
			"Clonebook represents my way of building up facebook. It is a complete project where you can engage with your friends through messages, posts, comments and replies.",
		link: "https://github.com/bertearazvan/cloneBook",
		legacy: true,
		icons: [
			"/assets/icons/svelte.png",
			"/assets/icons/tailwind.png",
			"/assets/icons/sapper.png",
			"/assets/icons/mongodb.png",
			"/assets/icons/socket.io.png",
			"/assets/icons/node.png",
		],
	},
	{
		name: "React weather app",
		src: "/assets/img/weather-app.jpg",
		desc:
			"An extensive weather app created in React using React-map-gl. Search by your own city and find the forecast for the following hours together with statistics based on the following days.",
		link: "https://github.com/bertearazvan/react-weather-app",
		legacy: true,
		icons: [
			"/assets/icons/react.png",
			"/assets/icons/tailwind.png",
			"/assets/icons/materialui.png",
			"/assets/icons/mapbox.png",
			"/assets/icons/aws.png",
		],
	},
	{
		name: "CheManager",
		src: "/assets/img/chemanager.png",
		desc:
			"Browser based application to manage a process for ensuring the safe storage of a number of dangerous chemicals at various depots across EU.",
		link: "https://github.com/bertearazvan/chemical_industry",
		legacy: true,
		icons: [
			"/assets/icons/react.png",
			"/assets/icons/node.png",
			"/assets/icons/knex.png",
			"/assets/icons/aws.png",
		],
	},
	{
		name: "News with Friends",
		src: "/assets/img/news_friends.png",
		desc:
			"News with friends is a little project where you can engage with a comunity through news sharing. Add some friends and see what they like.",
		link: "https://github.com/bertearazvan/friends_and_posts_react_node/",
		legacy: true,
		icons: [
			"/assets/icons/react.png",
			"/assets/icons/materialui.png",
			"/assets/icons/node.png",
			"/assets/icons/knex.png",
			"/assets/icons/aws.png",
		],
	},
	{
		name: "Plantify",
		src: "/assets/img/Artboard%204.png",
		desc:
			"Digital solution for fighting against worldwide deforestation. Donate goods or money for improving the global climate crisis.",
		link: "https://github.com/bertearazvan/plantify",
		legacy: true,
		icons: ["/assets/icons/js.png", "/assets/icons/uxui.png"],
	},
	{
		name: "ChatNow",
		src: "/assets/img/chatapp.png",
		desc:
			"A user-friendly live-chat app made with Socket.io and deployed using AWS. Join a room and start chatting.",
		link: "https://github.com/bertearazvan/chatnow-app",
		legacy: true,
		icons: [
			"/assets/icons/js.png",
			"/assets/icons/node.png",
			"/assets/icons/fontawesome.png",
			"/assets/icons/socket.io.png",
			"/assets/icons/cypress.png",
			"/assets/icons/aws.png",
		],
	},
	{
		name: "Miami Bar",
		src: "/assets/img/Artboard%205.png",
		desc:
			"Fully developed website that I'm currently maintaining for a well known Bar in Copenhagen. Reserve a table and come to the party!",
		link: "https://github.com/bertearazvan/miamibar_react",
		legacy: true,
		icons: ["/assets/icons/js.png", "/assets/icons/uxui.png"],
	},
	{
		name: "Rominality",
		src: "/assets/img/Artboard 1.png",
		desc:
			"Community-based web-service for rominimal genre enthusiasts. Play, share and enjoy music!",
		link: "https://github.com/bertearazvan/rominality",
		legacy: true,
		icons: [
			"/assets/icons/js.png",
			"/assets/icons/php.png",
			"/assets/icons/ajax.png",
			"/assets/icons/mysql.png",
		],
	},
	// Additional projects extracted from old index.html comments

	{
		name: "Marine Vegetation mapping",
		src: "/assets/dhi/marine-vegetation_thumbnail.jpg",
		desc:
			"Earth observation technology helps protect blue carbon ecosystems. Project for mapping submerged aquatic vegetation and extent — human-in-the-loop ML and mapping workflows.",
		// legacy removed
		icons: [
			"/assets/icons/js.png",
			"/assets/icons/react.png",
			"/assets/icons/mapbox.png",
		],
		link: "https://marine-vegetation.satlas.dk/landing-page",
		responsabilities: [
			"frontend development",
			"satellite-data integration",
			"architecture",
			"managing azure resources",
		],
	},
	{
		name: "SDG Water Quality Hub",
		src: "/assets/dhi/water-quality_thumbnail.jpg",
		desc:
			"SDG indicator 6.3.2 tracks progress towards SDG target 6.3. This target relates to improving water quality of rivers, lakes and aquifers globally. Full implementation of solution, with user management, data management and data visualization.",
		// legacy removed
		icons: [
			"/assets/icons/node.png",
			"/assets/icons/react.png",
			"/assets/icons/aws.png",
		],
		responsabilities: [
			"project management",
			"technical lead",
			"frontend and backend implementation",
			"user and data management",
		],
		link: "https://www.sdg632hub.org/#/",
	},
	{
		name: "ET4FAO",
		src: "/assets/dhi/et4fao_thumbnail.jpg",
		desc:
			"Demonstrating the utility of Sentinel-based evapotranspiration maps for consistent crop water use monitoring, from field to national scales, as preparation for future development of FAO's WaPOR portal.",
		// legacy removed
		icons: ["/assets/icons/js.png", "/assets/icons/react.png"],
		link: "https://et4fao.dhigroup.com/",
		responsabilities: ["frontend maintainance", "data integration"],
	},
	{
		name: "VeryCAP",
		src: "/assets/dhi/lbst_thumbnail.jpg",
		desc:
			"The flexible service for verification of the Common Agricultural Policy. ",
		// legacy removed
		icons: [
			"/assets/icons/mapbox.png",
			"/assets/icons/react.png",
			"/assets/icons/js.png",
		],
		link: "https://eo.dhigroup.com/solutions/vericap/",
		responsabilities: ["frontend development", "satellite-data integration"],
	},
	{
		name: "Satlas 2.0",
		src: "/assets/dhi/satlas_thumbnail.jpg",
		desc:
			"Monitoring the state and dynamics of Denmark using the latest satellite technology. Upgrade using Microsoft Planetary Computer, high-resolution layers and satellite data visualisation.",
		// legacy removed
		icons: [
			"/assets/icons/mapbox.png",
			"/assets/icons/react.png",
			"/assets/icons/aws.png",
		],
		resonsabilities: ["frontend development", "data integration"],
		link: "https://www.satlas.dk/",
	},
	{
		name: "Global Seas",
		src: "/assets/dhi/global-seas_thumbnail.jpg",
		desc:
			"Delivering earth observation enriched high-quality metocean data to enhance fuel efficiency in the shipping industry",
		// legacy removed
		icons: ["/assets/icons/mapbox.png", "/assets/icons/react.png"],
		link: "https://eo.dhigroup.com/projects/globalseas/",
		resonsabilities: ["frontend development", "data integration"],
	},

	{
		name: "LocalKnowledge",
		src: "/assets/dhi/arctic-navigation_thumbnail.jpg",
		desc: "Mapping submerged navigational hazards in the Arctic",
		// legacy removed
		icons: ["/assets/icons/js.png", "/assets/icons/react.png"],
		link:
			"https://www.dhigroup.com/projects/mapping-submerged-navigational-hazards-in-the-arctic",
		responsabilities: ["frontend development", "data integration"],
	},
	{
		name: "Internal React component library",
		src: "/assets/dhi/react-library_thumbnail.jpg",
		desc:
			"Internal shareable components library and ThemeProvider for MUI versioning and consistent UI across projects.",
		// legacy removed
		icons: ["/assets/icons/materialui.png", "/assets/icons/react.png"],
		responsabilities: [
			"frontend development",
			"library maintenance",
			"version control",
		],
	},
	{
		name: "OPS / Multi-deploy",
		src: "/assets/dhi/ops_thumbnail.jpg",
		desc:
			"Azure multi-deploy integration for staging per PR and production deployments; includes custom Github Actions and CI/CD automation.",
		// legacy removed
		icons: ["/assets/icons/azure.jpg"],
	},
	{
		name: "Combined Sewer Overflow (CSO)",
		src: "/assets/dhi/cso_thumbnail.jpg",
		desc: "Project about refactoring from Polymer to React",
		responsabilities: [
			"frontend migration",
			"team leadership",
			"cross-country collaboration",
		],
		// legacy removed
		icons: [
			"/assets/icons/js.png",
			"/assets/icons/react.png",
			"/assets/icons/node.png",
		],
		link:
			"https://www.dhigroup.com/technologies/mikepoweredbydhi/mike-operations",
	},
];

const enter = keyframes`
	from { transform: translateY(18px); opacity: 0; }
	to { transform: translateY(0); opacity: 1; }
`;

const Card = styled(Box)`
	border-radius: 22px;
	padding: 20px;
	background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
	border: 1px solid #c7c7c7;
	box-shadow: 0 12px 30px -6px rgba(50, 60, 80, 0.16);
	text-align: left;
	transition:
		transform 220ms ease,
		box-shadow 220ms ease;
	animation: ${enter} 520ms cubic-bezier(0.22, 1, 0.36, 1) both;

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 26px 46px -8px rgba(50, 60, 80, 0.22);
	}

	&:hover .project-image-wrapper::after {
		background: rgba(55, 66, 250, 0.1);
	}

	&:hover .project-image-wrapper .link-icon {
		opacity: 1;
		transform: scale(1);
	}

	&.clickable {
		cursor: pointer;
	}

	&.clickable .project-image-wrapper .link-icon {
		opacity: 0.4;
	}
`;

const CardWrapper = styled.a`
	text-decoration: none;
	color: inherit;
	display: block;
`;

const ProjectImg = styled.img`
	width: 100%;
	border-radius: 12px;
`;

const ProjectImageWrapper = styled.div`
	position: relative;
	display: block;
	overflow: hidden;
	border-radius: 12px;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(55, 66, 250, 0);
		transition: background 250ms ease;
	}

	.link-icon {
		position: absolute;
		top: 12px;
		right: 12px;
		background: rgba(255, 255, 255, 0.95);
		border-radius: 50%;
		padding: 8px;
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transform: scale(0.8);
		transition:
			opacity 250ms ease,
			transform 250ms ease;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		z-index: 1;
	}
`;

const IconsRow = styled.div`
	display: flex;
	gap: 6px;
	justify-content: flex-start;
	margin-top: 12px;
	margin-bottom: 8px;
`;

const ArchivedCard = styled(Card)`
	padding: 16px;
	background: linear-gradient(180deg, #fbfbfc 0%, #f7f8fb 100%);
	border: 1px solid rgba(199, 199, 199, 0.6);
	box-shadow: 0 6px 18px -6px rgba(50, 60, 80, 0.08);

	&:hover .project-image-wrapper::after {
		background: rgba(55, 66, 250, 0.1);
	}

	&:hover .project-image-wrapper .link-icon {
		opacity: 1;
		transform: scale(1);
	}

	&.clickable .project-image-wrapper .link-icon {
		opacity: 0.4;
	}
`;

const ArchivedSubtitle = styled(Typography)`
	display: block;
	margin-top: 6px;
	color: rgba(0, 0, 0, 0.6);
`;

const Projects: React.FC = () => {
	const [archivedExpanded, setArchivedExpanded] = useState<boolean>(false);

	const toggleArchived = () => {
		setArchivedExpanded((prev) => !prev);
	};

	// map icon path to readable skill name
	const mapIconToSkill = (icon: string) => {
		const file = icon.split("/").pop() || icon;
		const key = file.split(".")[0].toLowerCase();
		const map: Record<string, string> = {
			react: "React",
			materialui: "MUI",
			mapbox: "Mapbox",
			node: "Node.js",
			uxui: "UX/UI",
			azure: "Azure",
			svelte: "Svelte",
			tailwind: "Tailwind",
			sapper: "Sapper",
			mongodb: "MongoDB",
			socket: "Socket.IO",
			js: "JavaScript",
			php: "PHP",
			mysql: "MySQL",
			aws: "AWS",
			knex: "Knex",
			fontawesome: "FontAwesome",
			cypress: "Cypress",
			ajax: "AJAX",
			mapboxgl: "Mapbox",
			mapboxgljs: "Mapbox",
		};
		return map[key] || key.charAt(0).toUpperCase() + key.slice(1);
	};

	// NOTE: we previously inferred contributions heuristically. Per request,
	// only explicit `contributions` arrays on project objects should be shown.

	// aggregated skills from archived projects
	const archived = projects.filter((p) => p.legacy) as Project[];
	const aggregatedSkillsCount: Record<string, number> = {};
	archived.forEach((p) => {
		(p.icons || []).forEach((ic: string) => {
			const s = mapIconToSkill(ic);
			aggregatedSkillsCount[s] = (aggregatedSkillsCount[s] || 0) + 1;
		});
	});
	const aggregatedSkills = Object.entries(aggregatedSkillsCount)
		.sort((a, b) => b[1] - a[1])
		.map((e) => e[0]);
	return (
		<Container sx={{ my: 8 }} id="destination2">
			<Typography
				variant="h4"
				sx={{ textAlign: "center", fontWeight: 600, color: "#3742fa", mb: 6 }}
			>
				Some of my experiences
			</Typography>

			{/* Current Work at Saxo Bank */}
			<Container sx={{ my: 2, mb: 6 }}>
				<Box
					sx={{
						background: "linear-gradient(180deg, #ffffff 0%, #fbfdff 100%)",
						border: "2px solid #3742fa",
						borderRadius: "14px",
						padding: "24px",
						boxShadow: "0 12px 30px -6px rgba(55, 66, 250, 0.2)",
					}}
				>
					<Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
						<Typography variant="h6" sx={{ fontWeight: 600 }}>
							Senior Software Developer
						</Typography>
						<Chip label="Active" size="medium" color="primary" />
						<Chip label="@SaxoBank" size="medium" color="primary" />
					</Box>

					<Typography variant="body1" sx={{ color: "text.secondary" }}>
						Currently working as a Senior Software Developer at Saxo Bank, focusing on
						building and maintaining financial trading platforms and services.
					</Typography>
				</Box>
			</Container>

			{/* Work at DHI (projects where legacy === false) */}
			{projects.some((p) => !p.legacy) && (
				<Container sx={{ my: 2 }}>
					<Typography variant="h5" sx={{ fontWeight: 600, color: "#3742fa", mb: 1 }}>
						Work at DHI ({projects.filter((p) => !p.legacy).length})
					</Typography>
					<ArchivedSubtitle variant="subtitle2">
						Professional projects I contributed to at DHI Group — a global leader in
						water and environment solutions. My work spanned frontend development,
						geospatial data visualization, cloud infrastructure, and full-stack
						implementation across multiple international projects.
					</ArchivedSubtitle>

					{/* aggregated skills for DHI work */}
					{(() => {
						const dhi = projects.filter((p) => !p.legacy) as Project[];
						const countMap: Record<string, number> = {};
						dhi.forEach((p) =>
							(p.icons || []).forEach((ic) => {
								const s = mapIconToSkill(ic);
								countMap[s] = (countMap[s] || 0) + 1;
							}),
						);
						const skills = Object.entries(countMap)
							.sort((a, b) => b[1] - a[1])
							.map((e) => e[0]);
						return skills.length ? (
							<Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
								{skills.map((s) => (
									<Chip key={s} label={s} size="small" variant="outlined" />
								))}
							</Box>
						) : null;
					})()}

					<Grid container spacing={4} sx={{ mt: 2 }}>
						{projects
							.filter((p) => !p.legacy)
							.map((p) => (
								<Grid item xs={12} md={4} key={p.name}>
									{p.link ? (
										<CardWrapper href={p.link} target="_blank" rel="noreferrer">
											<Card className="clickable">
												<ProjectImageWrapper className="project-image-wrapper">
													<ProjectImg src={p.src} alt={p.name} />
													<Box className="link-icon">
														<OpenInNewIcon sx={{ fontSize: 20, color: "#3742fa" }} />
													</Box>
												</ProjectImageWrapper>
												<IconsRow>
													{(p.icons || []).map((icon) => (
														<img key={icon} src={icon} width={18} alt="icon" />
													))}
												</IconsRow>
												<Box
													sx={{
														display: "flex",
														justifyContent: "space-between",
														alignItems: "center",
														textAlign: "left",
													}}
												>
													<Typography
														variant="h6"
														sx={{ fontWeight: 600, textAlign: "left" }}
													>
														{p.name}
													</Typography>
													<Chip label="At DHI" size="small" color="primary" />
												</Box>
												<Box sx={{ mt: 2 }}>
													<Typography variant="body1">{p.desc}</Typography>
												</Box>

												{(() => {
													const contribs =
														p.contributions ?? p.responsabilities ?? p.resonsabilities;
													if (!contribs || contribs.length === 0) return null;
													return (
														<Box sx={{ mt: 2 }}>
															{contribs.map((c: string, i: number) => (
																<Typography
																	key={i}
																	variant="body2"
																	sx={{ color: "text.secondary", mt: 0.5 }}
																>
																	• {c}
																</Typography>
															))}
														</Box>
													);
												})()}
											</Card>
										</CardWrapper>
									) : (
										<Card>
											<ProjectImageWrapper className="project-image-wrapper">
												<ProjectImg src={p.src} alt={p.name} />
											</ProjectImageWrapper>
											<IconsRow>
												{(p.icons || []).map((icon) => (
													<img key={icon} src={icon} width={18} alt="icon" />
												))}
											</IconsRow>
											<Box
												sx={{
													display: "flex",
													justifyContent: "space-between",
													alignItems: "center",
													textAlign: "left",
												}}
											>
												<Typography
													variant="h6"
													sx={{ fontWeight: 600, textAlign: "left" }}
												>
													{p.name}
												</Typography>
												<Chip label="At DHI" size="small" color="primary" />
											</Box>
											<Box sx={{ mt: 2 }}>
												<Typography variant="body1">{p.desc}</Typography>
											</Box>

											{(() => {
												const contribs =
													p.contributions ?? p.responsabilities ?? p.resonsabilities;
												if (!contribs || contribs.length === 0) return null;
												return (
													<Box sx={{ mt: 2 }}>
														{contribs.map((c: string, i: number) => (
															<Typography
																key={i}
																variant="body2"
																sx={{ color: "text.secondary", mt: 0.5 }}
															>
																• {c}
															</Typography>
														))}
													</Box>
												);
											})()}
										</Card>
									)}
								</Grid>
							))}
					</Grid>
				</Container>
			)}

			{/* archived projects */}
			{projects.some((p) => p.legacy) && (
				<Container sx={{ my: 6 }}>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: 1,
							cursor: "pointer",
							userSelect: "none",
						}}
						onClick={toggleArchived}
					>
						<Typography
							variant="h5"
							sx={{ fontWeight: 600, color: "#3742fa", mb: 1 }}
						>
							Archived projects ({projects.filter((p) => p.legacy).length})
						</Typography>
						<ExpandMoreIcon
							sx={{
								color: "#3742fa",
								fontSize: 32,
								mb: 1,
								transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
								transform: archivedExpanded ? "rotate(180deg)" : "rotate(0deg)",
							}}
						/>
					</Box>
					<ArchivedSubtitle variant="subtitle2">
						Personal and academic projects created during my university studies and
						early career development. These projects helped me build foundational
						skills in web development, UI/UX design, and software engineering.
					</ArchivedSubtitle>

					{/* aggregated skills */}
					{aggregatedSkills.length > 0 && (
						<Box sx={{ mt: 2, display: "flex", gap: 1, flexWrap: "wrap" }}>
							{aggregatedSkills.map((s) => (
								<Chip key={s} label={s} size="small" variant="outlined" />
							))}
						</Box>
					)}

					{archivedExpanded && (
						<Grid container spacing={3} sx={{ mt: 2 }}>
							{archived.map((p) => (
								<Grid item xs={12} md={4} key={p.name}>
									{p.link ? (
										<CardWrapper href={p.link} target="_blank" rel="noreferrer">
											<ArchivedCard className="clickable">
												<ProjectImageWrapper className="project-image-wrapper">
													<ProjectImg src={p.src} alt={p.name} />
													<Box className="link-icon">
														<OpenInNewIcon sx={{ fontSize: 20, color: "#3742fa" }} />
													</Box>
												</ProjectImageWrapper>
												<IconsRow>
													{(p.icons || []).map((icon) => (
														<img key={icon} src={icon} width={16} alt="icon" />
													))}
												</IconsRow>
												<Typography
													variant="subtitle1"
													sx={{
														fontWeight: 600,
														color: "text.secondary",
														textAlign: "left",
													}}
												>
													{p.name}
												</Typography>

												<Box sx={{ mt: 1 }}>
													<Typography variant="body2" sx={{ color: "text.secondary" }}>
														{p.desc}
													</Typography>
												</Box>

												{/* contributions toggle (only when explicit contributions are provided) */}
												{(() => {
													const contribs =
														p.contributions ?? p.responsabilities ?? p.resonsabilities;
													if (!contribs || contribs.length === 0) return null;
													return (
														<Box sx={{ mt: 2 }}>
															{contribs.map((c: string, i: number) => (
																<Typography
																	key={i}
																	variant="body2"
																	sx={{ color: "text.secondary", mt: 0.5 }}
																>
																	• {c}
																</Typography>
															))}
														</Box>
													);
												})()}
											</ArchivedCard>
										</CardWrapper>
									) : (
										<ArchivedCard>
											<ProjectImageWrapper className="project-image-wrapper">
												<ProjectImg src={p.src} alt={p.name} />
											</ProjectImageWrapper>
											<IconsRow>
												{(p.icons || []).map((icon) => (
													<img key={icon} src={icon} width={16} alt="icon" />
												))}
											</IconsRow>
											<Typography
												variant="subtitle1"
												sx={{
													fontWeight: 600,
													color: "text.secondary",
													textAlign: "left",
												}}
											>
												{p.name}
											</Typography>

											<Box sx={{ mt: 1 }}>
												<Typography variant="body2" sx={{ color: "text.secondary" }}>
													{p.desc}
												</Typography>
											</Box>

											{/* contributions toggle (only when explicit contributions are provided) */}
											{(() => {
												const contribs =
													p.contributions ?? p.responsabilities ?? p.resonsabilities;
												if (!contribs || contribs.length === 0) return null;
												return (
													<Box sx={{ mt: 2 }}>
														{contribs.map((c: string, i: number) => (
															<Typography
																key={i}
																variant="body2"
																sx={{ color: "text.secondary", mt: 0.5 }}
															>
																• {c}
															</Typography>
														))}
													</Box>
												);
											})()}
										</ArchivedCard>
									)}
								</Grid>
							))}
						</Grid>
					)}
				</Container>
			)}
		</Container>
	);
};

export default Projects;
