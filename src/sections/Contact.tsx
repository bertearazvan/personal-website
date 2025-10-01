import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import styled from "styled-components";

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
					If you'd like to get in touch, send me a message.
				</Typography>
				<Box component="form" sx={{ maxWidth: 600, mx: "auto" }}>
					<TextField fullWidth label="Your name" sx={{ mb: 2 }} />
					<TextField fullWidth label="Your email" sx={{ mb: 2 }} />
					<TextField fullWidth label="Message" multiline rows={4} sx={{ mb: 2 }} />
					<Button variant="contained">Send</Button>
				</Box>
			</ContactBox>
		</Container>
	);
};

export default Contact;
