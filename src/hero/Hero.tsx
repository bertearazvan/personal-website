import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import Particles from 'react-tsparticles'
import RootBoxStyled from './RootBox.styled'
import particlesJSON from './particlesConfig'
import Avataar from './Avataar'
import HeroBoxStyled from './HeroBox.styled'

const Hero: FC = () => (
	<RootBoxStyled position="relative">
		<Box mt={0} position="relative">
			<Particles
				id="tsparticles"
				options={particlesJSON}
				style={{ position: 'relative' }}
			/>
		</Box>
		<Box
			alignItems="center"
			display="flex"
			height="100vh"
			justifyContent="center"
			left={0}
			position="absolute"
			top={0}
			width={1}
			zIndex={5}
		>
			<Box display="flex" flexWrap="wrap" justifyContent="center" mb={4}>
				<Box
					alignItems="center"
					display="flex"
					flexDirection="column"
					maxWidth="40%"
					minWidth={500}
					mr={2}
				>
					<Avataar />
					<Typography align="center" sx={{ mt: 2 }} variant="h1" gutterBottom>
						Web developer
					</Typography>
					<Typography align="center" variant="h2" gutterBottom>
						I like to code &<br /> enjoy life
					</Typography>
				</Box>
				<HeroBoxStyled flexGrow={1} maxWidth="25%" minWidth={400} ml={2}>
					<Typography color="primary" fontWeight="600" variant="h2">
						Hi! I&apos;m Razvan
					</Typography>
					<Typography variant="h3" gutterBottom>
						I am passionate and enthusiastic about coding, with a creative
						flair.
					</Typography>
					<Typography variant="h3" gutterBottom>
						<Box
							color="primary"
							component="span"
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
