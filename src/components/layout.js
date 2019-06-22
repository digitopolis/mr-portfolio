import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
		<Helmet>
			<title>Matt Readout - Web Developer</title>
      <meta charSet="utf-8" />
			<meta name="description" content="Matt Readout Web Dev Portfolio">
		  <meta name="keywords" content="Web Developer, Software Engineer, JavaScript, React, Ruby, Rails">
		  <meta name="author" content="Matt Readout">
		  <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </Helmet>
		<header style={{ marginBottom: `3rem` }}>
			<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
				<h3 style={{ display: `inline` }}>Matt Readout</h3>
			</Link>
			<ul style={{ listStyle: `none`, float: `right`, marginBlockStart: `.5em` }}>
				<ListLink to="/">About</ListLink>
				<ListLink to="/projects/">Projects</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
				<ListLink to="/noise/">Noise</ListLink>
			</ul>
		</header>
    {children}
  </div>
)
