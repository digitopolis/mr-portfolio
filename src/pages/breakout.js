import React from 'react'
import Layout from '../components/layout'

let canvas
let ctx

class Breakout extends React.Component {

	componentDidMount() {
		canvas = document.getElementById('gameCanvas')
		ctx = canvas.getContext('2d')
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
				</div>
			</Layout>
		)
	}
}

export default Breakout;
