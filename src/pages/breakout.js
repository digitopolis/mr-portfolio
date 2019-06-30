import React from 'react'
import Layout from '../components/layout'
import styled	 from 'styled-components'

let canvas
let ctx
let x
let y
let dx
let dy

class Breakout extends React.Component {

	componentDidMount() {
		canvas = document.getElementById('gameCanvas')
		ctx = canvas.getContext('2d')
	}

	drawBall = () => {
		ctx.beginPath()
		ctx.arc(x, y, 10, 0, Math.PI*2)
		ctx.fillStyle = 'black'
		ctx.fill()
		ctx.closePath()
	}

	draw = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.drawBall()
    x += dx
    y += dy
	}

	render () {
		return (
			<Layout>
				<div className='content'>
					<h1>Break some blocks</h1>
					<p>Please be gentle, Atari lawyers</p>
					<div>
						<canvas
							id='gameCanvas'
							style={{width: "75%", height: "45%", border:'1px solid #000000' }}></canvas>
					</div>
					<div>
						<Button onClick={this.draw}>Start</Button>
					</div>
				</div>
			</Layout>
		)
	}
}

export default Breakout;

const Button = styled.button`
	font-family: 'Roboto Mono', monospace;
	text-decoration: ${props => props.disabled ? 'line-through' : 'none' }
	color: black;
	background: white;
	font-size: 1em;
	margin: 0.5em 1em;
	padding: 0.25em 1em;
  border: 2px solid black;
	border-radius: 2px;
`
