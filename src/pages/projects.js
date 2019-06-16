import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import { PROJECTS } from '../data/projectData'

const Project = props => (
	<div>
		<h3>{props.name}</h3>
		<p>{props.shortDescription}</p>
		<ul>
			{props.bulletPoints.map(point => <li>{point}</li>)}
		</ul>
		<Button>Frontend Repo</Button>
		<Button>Backend Repo</Button>
		<Button>Demo</Button>
	</div>
)

export default () => (
  <Layout>
    <h1>List of projects</h1>
		{PROJECTS.map((project, idx) => <Project key={idx} {...project}/>)}
  </Layout>
)

const Button = styled.button`
	font-family: 'Roboto Mono', monospace;
	color: white;
	background: black
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
  border: 2px solid black;
	border-radius: 2px;
`
