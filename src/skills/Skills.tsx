import React, { FC, useState } from 'react'
import { Box, Typography } from '@mui/material'
import SkillsCard from './SkillsCard.styled'

const Skills: FC = () => (
	<Box>
		<Typography align="center" variant="h1" color="primary" gutterBottom>
			Skills
		</Typography>
		<Typography align="center" variant="h2" color="secondary" gutterBottom>
			Some of my skills that I am constantly improving on.
		</Typography>
		<Box px="50%" display="flex">
			<SkillsCard>1</SkillsCard>
			<SkillsCard>2</SkillsCard>
		</Box>
	</Box>
)

export default Skills
