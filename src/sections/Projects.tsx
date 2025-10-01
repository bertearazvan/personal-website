import React from "react";
import { Container, Grid, Box, Typography, Button } from "@mui/material";
import styled from "styled-components";

const projects = [
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
];

const Card = styled(Box)`
	border-radius: 22px;
	padding: 10px;
	box-shadow: 0px 10px 25px -2px rgba(199, 199, 199, 1);
	text-align: center;
`;

const ProjectImg = styled.img`
	width: 100%;
	border-radius: 12px;
`;

const IconsRow = styled.div`
	display: flex;
	gap: 8px;
	justify-content: center;
	margin-top: 12px;
`;

const Projects: React.FC = () => {
	return (
		<Container sx={{ my: 8 }} id="destination2">
			<Typography
				variant="h4"
				sx={{ textAlign: "center", fontWeight: 600, color: "#3742fa", mb: 6 }}
			>
				Some of my work
			</Typography>
			<Grid container spacing={4}>
				{projects.map((p) => (
					<Grid item xs={12} md={4} key={p.name}>
						<Card>
							<ProjectImg src={p.src} alt={p.name} />
							<IconsRow>
								{p.icons.map((icon) => (
									<img key={icon} src={icon} width={30} alt="icon" />
								))}
							</IconsRow>
							<Box sx={{ mt: 2 }}>
								<Typography variant="body1">
									{p.legacy ? <em>- legacy -</em> : null} {p.desc}
								</Typography>
								{p.link ? (
									<Box sx={{ mt: 3 }}>
										<Button
											variant="outlined"
											component="a"
											href={p.link}
											target="_blank"
											rel="noreferrer"
										>
											See project
										</Button>
									</Box>
								) : null}
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Projects;
