import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Particles from 'react-tsparticles'
import RootBoxStyled from './RootBox.styled'
import particlesJSON from './particlesConfig'
import Avataar from './Avataar'
import HeroBoxStyled from './HeroBox.styled'

const Hero: FC = () => (
	<RootBoxStyled position="relative">
		<Box position="relative" mt={0}>
			<Particles
				style={{ position: 'relative' }}
				id="tsparticles"
				options={particlesJSON}
			/>
		</Box>
		<Box
			position="absolute"
			zIndex={5}
			top={0}
			left={0}
			width={1}
			height="100vh"
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			<Box display="flex" justifyContent="center" mb={4} flexWrap="wrap">
				<Box
					mr={2}
					minWidth={500}
					maxWidth="40%"
					display="flex"
					flexDirection="column"
					alignItems="center"
				>
					<Avataar />
					<Typography sx={{ mt: 2 }} align="center" variant="h1" gutterBottom>
						Web developer
					</Typography>
					<Typography align="center" variant="h2" gutterBottom>
						I like to code &<br /> enjoy life
					</Typography>
				</Box>
				<HeroBoxStyled flexGrow={1} minWidth={400} ml={2} maxWidth="25%">
					<Typography variant="h2" fontWeight="600" color="primary">
						Hi! I&apos;m Razvan
					</Typography>
					<Typography variant="h3" gutterBottom>
						I am passionate and enthusiastic about coding, with a creative
						flair.
					</Typography>
					<Typography variant="h3" gutterBottom>
						<Box
							component="span"
							color="primary"
							sx={{ color: 'primary.main', fontWeight: '600' }}
						>
							Web developer
						</Box>
						, excited for opportunities within the open-source community and
						contributing to projects that serve a meaningful cause.
					</Typography>
					<Typography variant="h3" gutterBottom>
						Continuously growing my professional knowledge by looking for and
						creating new experiences.
					</Typography>
				</HeroBoxStyled>
			</Box>
		</Box>
	</RootBoxStyled>
)

export default Hero
