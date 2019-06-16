export const PROJECTS = [
	{
		name: 'Portfolio',
		shortDescription: 'A modern platform for visual artists to showcase their work and build an online community',
		bulletPoints: [
			'+ Designed user interface using Semantic UI React to highlight users’ uploaded images.',
			'+ Implemented Authentication/Authorization with JSON Web Tokens to protect and verify artist accounts.',
			'+ Developed a Rails API backend with endpoints for artists, works, and comments.',
			'+ Integrated Redux to manage state across entire application.'
		],
		frontendRepo: 'https://github.com/digitopolis/portfolio-frontend',
		backendRepo: 'https://github.com/digitopolis/portfolio-backend',
		demoVideo: 'https://youtu.be/jSD-QYRB01E'
	},
	{
		name: 'Encounter Builder',
		shortDescription: 'A fully-featured utility for quickly designing encounters for the TRPG Dungeons & Dragons',
		bulletPoints: [
			'+ Parsed data from multiple endpoints on public API to seed database.',
			'+ Utilized React to build a reusable modular user interface.',
			'+ Applied RESTful routing in Rails backend to handle client-side requests.',
			'+ Established ESLint rules to maintain high quality, standardized code.'
		],
		frontendRepo: 'https://github.com/EPICZEUS/encounter-builder-frontend',
		backendRepo: 'https://github.com/EPICZEUS/encounter-builder-backend',
		demoVideo: 'https://youtu.be/mpnrYBA8P0s'
	},
	{
		name: 'Concrete',
		shortDescription: 'An ambient sound generator for relaxation and mental focus',
		bulletPoints: [
			'+ Utilized Web Audio API to generate and manipulate audio files in browser.',
			'+ Integrated HTML canvas element to give user control over synthesized sounds.',
			'+ Implemented a SQLite3 database to store and retrieve user compositions.',
			'+ Developed custom CSS for styling and animation.'
		],
		frontendRepo: 'https://github.com/digitopolis/concrete-frontend',
		backendRepo: 'https://github.com/digitopolis/concrete-backend',
		demoVideo: 'https://youtu.be/vgaZGjWDEVQ'
	}
]
