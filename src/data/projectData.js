export const PROJECTS = [
  {
    name: "Portfolio",
    shortDescription:
      "A modern platform for visual artists to showcase their work and build an online community",
    bulletPoints: [
      "+ Designed user interface using Semantic UI React to highlight users’ uploaded images.",
      "+ Implemented Authentication/Authorization with JSON Web Tokens to protect and verify artist accounts.",
      "+ Developed a Rails API backend with endpoints for artists, works, and comments.",
      "+ Integrated Redux to manage state across entire application.",
    ],
    frontendRepo: "https://github.com/digitopolis/portfolio-frontend",
    backendRepo: "https://github.com/digitopolis/portfolio-backend",
    demoVideo: "https://youtu.be/jSD-QYRB01E",
  },
  {
    name: "Encounter Builder",
    shortDescription:
      "A fully-featured utility for quickly designing encounters for the TRPG Dungeons & Dragons",
    bulletPoints: [
      "+ Parsed data from multiple endpoints on public API to seed database.",
      "+ Utilized React to build a reusable modular user interface.",
      "+ Applied RESTful routing in Rails backend to handle client-side requests.",
      "+ Established ESLint rules to maintain high quality, standardized code.",
    ],
    frontendRepo: "https://github.com/EPICZEUS/encounter-builder-frontend",
    backendRepo: "https://github.com/EPICZEUS/encounter-builder-backend",
    demoVideo: "https://youtu.be/mpnrYBA8P0s",
  },
  {
    name: "Concrete",
    shortDescription:
      "An ambient sound generator for relaxation and mental focus",
    bulletPoints: [
      "+ Utilized Web Audio API to generate and manipulate audio files in browser.",
      "+ Integrated HTML canvas element to give user control over synthesized sounds.",
      "+ Implemented a SQLite3 database to store and retrieve user compositions.",
      "+ Developed custom CSS for styling and animation.",
    ],
    frontendRepo: "https://github.com/digitopolis/concrete-frontend",
    backendRepo: "https://github.com/digitopolis/concrete-backend",
    demoVideo: "https://youtu.be/vgaZGjWDEVQ",
  },
]

export const EXPERIENCE = [
  {
    companyName: "Health Worker Data Alliance",
    titleWithDates: "Software Developer, May - Jun 2020",
    bulletPoints: [
      "// Joined distributed team of developers to deliver custom survey app for COVID-19 related non-profit initiative",
      "// Reduced error feedback loop to under 1 minute, by creating an AWS Lambda (Node.js) to send automatic notifications to team’s dedicated Slack channel",
      "// Streamlined development process using GitHub Actions to configure CI/CD pipeline for notification lambda in both production and development environments",
      "// Established high standard of code quality by applying test-driven development practices throughout – ensuring robust test coverage by writing unit, integration, and end - to - end tests",
      "// Kept project timeline on track by ramping up on Python to help complete another AWS Lambda in data pipeline",
      "// Consulted on architectural decisions around building serverless AWS data pipeline",
      "// Participated in regular standup and IPM, as well as presenting feature demos to clients",
      "// Performed detailed QA testing on both React frontend and AWS data pipeline backend before handoff to client",
      "// Contributed to extensive documentation for project, focusing on ease of maintenance for client team",
    ],
  },
  {
    companyName: "8th Light, Los Angeles, CA",
    titleWithDates: "Software Crafter Apprentice, Feb. - May 2020",
    bulletPoints: [
      "// Worked with mentor team to complete rigorous curriculum of modern apprenticeship program",
      "// Followed Agile project management practices, including story writing, estimating, and holding IPM and retros",
      "// Developed skills as polyglot, ramping up on several languages in both object-oriented and functional paradigms",
      "// Honed skills writing high-quality code, following SOLID principles and established software design patterns",
      "// Focused on applying principles of test-driven development to each project from the ground up",
      "// Built non-technical skills like documenting progress and preparing and presenting demos",
      "// Paired with other apprentices both in-person and remotely, to share experience and reinforce our learning",
    ],
  },
]
