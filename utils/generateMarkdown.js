// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `[License: ${license}](https://choosealicense.com/licenses/${license.toLowerCase().replace(' ', '-')}/)`;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the terms of the **${license}** license. For more details, check the license link: ${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, use the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, you can reach me at [${data.email}](mailto:${data.email}).

You can also find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

export default generateMarkdown;
