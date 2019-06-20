import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

class Noise extends React.Component {

	state = {
		on: false,
		wave: ''
	}

	componentDidMount() {
		console.log('mounted');
	}

	toggleOnOff = () => {
		const on = !this.state.on
		console.log(on);
		this.setState({ on })
	}

	handleWaveSelect = (e) => {
		console.log(e.target.value)
		const wave = e.target.value
		this.setState({ wave })
	}

	render () {
		return (
			<Layout>
				<div>
					<canvas style={{width: "60%", height: "40%", border:'1px solid #000000' }} >
					</canvas>
				</div>
				<div id="synth-control">
					<Button onClick={this.toggleOnOff} >On/Off</Button>
					<span id="wave-span">
						<Button
							value='Sine'
							onClick={this.handleWaveSelect}>Sine</Button>
						<Button
							value='Square'
							onClick={this.handleWaveSelect}>Square</Button>
						<Button
							value='Saw'
							onClick={this.handleWaveSelect}>Saw</Button>
					</span>
				</div>
				<div id="audio-container" hidden>
				</div>
			</Layout>

		)
	}
}

export default Noise;

const Button = styled.button`
	font-family: 'Roboto Mono', monospace;
	color: black;
	background: white;
	font-size: 1em;
	margin: 0.5em 1em;
	padding: 0.25em 1em;
  border: 2px solid black;
	border-radius: 2px;
`
