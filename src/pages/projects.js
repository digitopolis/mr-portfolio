import React from "react"
import Layout from '../components/layout'
import { PROJECTS } from '../data/projectData'

const Project = props => (
	<div>
		<h3>{props.name}</h3>
		<p>{props.shortDescription}</p>
		<ul>
			{props.bulletPoints.map(point => <li>{point}</li>)}
		</ul>
	</div>
)

export default () => (
  <Layout>
    <h1>List of projects</h1>
		{PROJECTS.map((project, idx) => <Project key={idx} {...project}/>)}
  </Layout>
)
