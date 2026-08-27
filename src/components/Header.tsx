import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
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
	const menuItems = [
		{ label: "About me", href: "#destination1" },
		{ label: "Projects", href: "#destination2" },
		{ label: "Skills", href: "#destination3" },
		{ label: "Contact", href: "#destination4" },
	];

	const handleNavClick = (e: React.MouseEvent, href: string) => {
		e.preventDefault();
		const targetId = href.substring(1); // Remove the '#'
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80; // Account for header height
			window.scrollTo({
				top: offsetTop,
				behavior: "smooth",
			});
		}
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<NavBar position="sticky" color="transparent" elevation={0}>
				<Toolbar>
					<Box sx={{ flexGrow: 1 }} /> {/* Spacer to push nav items to the right */}
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						{menuItems.map((item) => (
							<NavButton
								key={item.label}
								href={item.href}
								onClick={(e) => handleNavClick(e, item.href)}
							>
								{item.label}
							</NavButton>
						))}
					</Box>
				</Toolbar>
			</NavBar>
		</Box>
	);
};

export default Header;
