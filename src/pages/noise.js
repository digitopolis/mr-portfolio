import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'



let audioContext
let osc
let gain

class Noise extends React.Component {

	state = {
		on: false,
		wave: '',
		started: false
	}

	componentDidMount() {
		console.log('mounted');
		// osc.connect(gain)
		//
		// osc.type = 'sine'
		// osc.frequency.value = 120
		// gain.gain.value = 0.05
	}

	toggleOnOff = () => {
		const on = !this.state.on
		console.log(on);
		this.setState({ on })
		if (on) {
			gain.connect(audioContext.destination)
		} else {
			gain.disconnect(audioContext.destination)
		}
	}

	handleWaveSelect = (e) => {
		console.log(e.target.value)
		const wave = e.target.value
		this.setState({ wave })
	}

	handleMouseMove = (event) => {
    osc.frequency.value = Math.abs(475 - event.clientX) / 100 * 1300
    gain.gain.value = (393 - event.clientY) / 100 * .5
  }

	startOscillator = () => {
		audioContext = new (window.AudioContext || window.webkitAudioContext)()
		osc = audioContext.createOscillator()
		gain = audioContext.createGain()

		osc.connect(gain)

		osc.type = 'sine'
		osc.frequency.value = 120
		gain.gain.value = 0.05

		osc.start()
	}

	render () {
		return (
			<Layout>
				<div>
					<canvas
						style={{width: "60%", height: "40%", border:'1px solid #000000' }}
						onMouseMove={this.handleMouseMove} >
					</canvas>
				</div>
				<div id="synth-control">
					<Button onClick={this.startOscillator}>Start</Button>
					<Button onClick={this.toggleOnOff} >On/Off</Button>
					<span id="wave-span">
						<Button
							value='sine'
							onClick={this.handleWaveSelect}>Sine</Button>
						<Button
							value='square'
							onClick={this.handleWaveSelect}>Square</Button>
						<Button
							value='saw'
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
