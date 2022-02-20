import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Box } from '@mui/material'
import Hero from '../src/hero/Hero'
import Projects from '../src/projects/Projects'
import Skills from '../src/skills/Skills'

const Home: NextPage = () => (
	<div>
		<Head>
			<title>Razvan head</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main>
			<Hero />
			<Projects />
			<Skills />
		</main>

		<footer>Razvan footer</footer>
	</div>
)

export default Home
