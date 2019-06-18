import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h1>Get in touch:</h1>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '1em 0.25em' }}>
				<Button
					as='a'
					href='mailto:matt.readout@gmail.com'
				>
					Email
				</Button>
				<Button
					as='a'
					href='https://www.linkedin.com/in/mattreadout/'
				>
					Linkedin
				</Button>
				<Button
					as='a'
					href='https://github.com/digitopolis'
				>
					GitHub
				</Button>
			</div>
  </Layout>
)

const Button = styled.button`
	font-family: 'Roboto Mono', monospace;
	color: white;
	text-decoration: none;
	background: black
	font-size: 1em;
	margin: 0.5em 0;
	padding: 0.25em 1em;
  border: 2px solid black;
	border-radius: 2px;
`
