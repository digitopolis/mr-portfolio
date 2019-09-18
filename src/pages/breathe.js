import React from 'react'
import Layout from '../components/layout'

class Breathe extends React.Component {
	render () {
		return (
			<Layout>
				<h1>Breathing exercise</h1>
				<div className='flex-container'>
					<div className='circle'></div>
				</div>
			</Layout>
		)
	}
}

export default Breathe;
