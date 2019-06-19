import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import { PROJECTS } from '../data/projectData'

const Project = props => (
	<div style={{ padding: '1em 0.25em' }}>
		<h3>{props.name}</h3>
		<hr/>
		<p>{props.shortDescription}</p>
		<ul>
			{props.bulletPoints.map((point, idx) => <li key={idx}>{point}</li>)}
		</ul>
		<div style={{ padding: '1em 0.25em' }}>
			<Button
				as='a'
				href={props.frontendRepo}
			>
				Frontend Repo
			</Button>
			<Button
				as='a'
				href={props.backendRepo}
			>
				Backend Repo
			</Button>
			<Button
				as='a'
				href={props.demoVideo}
			>
				Demo
			</Button>
		</div>
	</div>
)

export default () => (
  <Layout>
    <h1>Recent Projects</h1>
		{PROJECTS.map((project, idx) => <Project key={idx} {...project}/>)}
  </Layout>
)

const Button = styled.button`
	font-family: 'Roboto Mono', monospace;
	color: white;
	text-decoration: none;
	background: black
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
  border: 2px solid black;
	border-radius: 2px;
`
