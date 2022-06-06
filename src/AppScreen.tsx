import React, { FC, useState } from 'react'
import { Box } from '@mui/material'
import Hero from './hero/Hero'
import Projects from './projects/Projects'
import Skills from './skills/Skills'

const AppScreen: FC = () => (
	<Box>
		<Hero />
		<Projects />
		<Skills />
	</Box>
)

export default AppScreen
