import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'



let audioContext
let osc
let gain

class Noise extends React.Component {

	state = {
		on: false,
		started: false
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
		const wave = e.target.value
		osc.type = wave
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
		const started = !this.state.started
		this.setState({ started })
	}

	render () {
		return (
			<Layout>
				<div className='content'>
					<h1>Make some noise:</h1>
					<p>This simple synthesizer uses the Web Audio API to generate sounds in your browser. First, click 'Start' to wire everything up, turn the oscillator on and off with 'On/Off,' and change the shape of the sound wave with the remaining three  buttons. Move your cursor around in the box to change the frequency/gain!</p>
					<div>
						<canvas
							style={{width: "75%", height: "45%", border:'1px solid #000000' }}
							onMouseMove={this.state.started ? this.handleMouseMove : null} >
						</canvas>
					</div>
					<div id="synth-control">
						<Button
							disabled={this.state.started}
							onClick={this.startOscillator}>Start</Button>
						<Button
							disabled={!this.state.started}
							onClick={this.toggleOnOff} >On/Off</Button>
						<span id="wave-span">
							<Button
								value='sine'
								disabled={!this.state.started}
								onClick={this.handleWaveSelect}>Sine</Button>
							<Button
								value='square'
								disabled={!this.state.started}
								onClick={this.handleWaveSelect}>Square</Button>
							<Button
								value='sawtooth'
								disabled={!this.state.started}
								onClick={this.handleWaveSelect}>Saw</Button>
						</span>
					</div>
				</div>
			</Layout>

		)
	}
}

export default Noise;

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
