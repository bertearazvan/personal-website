import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactBox = styled(Box)`
	text-align: center;
	padding: 40px 20px;
`;

const Contact: React.FC = () => {
	return (
		<Container sx={{ my: 8 }} id="destination4">
			<ContactBox>
				<Typography variant="h4" sx={{ fontWeight: 600, color: "#3742fa", mb: 2 }}>
					Contact
				</Typography>
				<Typography sx={{ mb: 3 }}>
					Let's connect! Feel free to reach out to me on LinkedIn.
				</Typography>
				<Button
					variant="contained"
					size="large"
					startIcon={<LinkedInIcon />}
					href="https://www.linkedin.com/in/razvan-bertea-29a298156/"
					target="_blank"
					rel="noopener noreferrer"
					sx={{
						textTransform: "none",
						fontSize: "1.1rem",
						px: 4,
						py: 1.5,
					}}
				>
					Connect on LinkedIn
				</Button>
			</ContactBox>
		</Container>
	);
};

export default Contact;
