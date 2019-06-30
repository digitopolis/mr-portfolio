import React from 'react'
import Layout from '../components/layout'
import styled	 from 'styled-components'

let canvas
let ctx
let ballRadius = 5
let x
let y
let dx = 2
let dy = -2

class Breakout extends React.Component {

	state = {
		start: false
	}

	componentDidMount() {
		canvas = document.getElementById('gameCanvas')
		ctx = canvas.getContext('2d')
	}

	drawBall = () => {
		ctx.beginPath()
		ctx.arc(x, y, ballRadius, 0, Math.PI*2)
		ctx.fillStyle = 'black'
		ctx.fill()
		ctx.closePath()
	}

	draw = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.drawBall()

		if (x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
			dx = -dx
		}
		if (y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
			dy = -dy
		}
    x += dx
    y += dy
	}

	start = () => {
		x = canvas.width/2;
		y = canvas.height-30;
		let start = !this.state.start
		this.setState({ start })
	}

	render () {
		if (this.state.start) {
			setInterval(this.draw, 10)
		}
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
						<Button onClick={this.start}>Start</Button>
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
