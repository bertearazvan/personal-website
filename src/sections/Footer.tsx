import React from "react";
import styled from "styled-components";

const FooterWrap = styled.footer`
	text-align: center;
	padding: 30px 10px;
	background: transparent;
`;

const Social = styled.div`
	margin-bottom: 12px;
	a {
		color: inherit;
		margin: 0 8px;
		font-size: 20px;
	}
`;

const Footer: React.FC = () => {
	return (
		<FooterWrap>
			<Social>
				<a href="https://github.com/bertearazvan" aria-label="github">
					<i className="fab fa-github" />
				</a>
				<a
					href="https://www.linkedin.com/in/mihai-razvan-bertea-29a298156/"
					aria-label="linkedin"
				>
					<i className="fab fa-linkedin-in" />
				</a>
			</Social>
			<div>
				<a href="#destination1">Home</a>
			</div>
			<p style={{ marginTop: 12 }}>
				Designed &amp; Coded by Razvan Bertea © 2018
			</p>
		</FooterWrap>
	);
};

export default Footer;
