import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";

const NavBar = styled(AppBar)`
	background: rgba(1, 1, 1, 0);
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	box-shadow: none;
	border: none;

	@media (min-width: 768px) {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;

const NavButton = styled(Button)`
	&& {
		text-align: right;
		font-size: 16px;
		font-weight: 500; /* reduced weight */
		color: inherit;
		text-transform: none;
	}
`;

const Header: React.FC = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar position="sticky" color="transparent" elevation={0}>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						sx={{
							flexGrow: 1,
							fontWeight: 700,
							fontSize: { xs: "1rem", md: "1.25rem" },
						}}
					>
						Razvan
					</Typography>
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<NavButton href="#destination1">About me</NavButton>
						<NavButton href="#destination2">Projects</NavButton>
						<NavButton href="#destination3">Skills</NavButton>
						<NavButton href="#destination4">Contact</NavButton>
					</Box>
					<IconButton
						edge="end"
						color="inherit"
						aria-label="menu"
						sx={{ display: { md: "none" } }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</NavBar>
		</Box>
	);
};

export default Header;
