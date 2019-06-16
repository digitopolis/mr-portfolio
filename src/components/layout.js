import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
		<header style={{ marginBottom: `3rem` }}>
			<Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
				<h3 style={{ display: `inline` }}>Matt Readout</h3>
			</Link>
			<ul style={{ listStyle: `none`, float: `right`, marginBlockStart: `.5em` }}>
				<ListLink to="/">About</ListLink>
				<ListLink to="/projects/">Projects</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
			</ul>
		</header>
    {children}
  </div>
)
