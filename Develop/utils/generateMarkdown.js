// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generatePage = {
  renderLicenseBadge: function (license) {

    let badge = ''

    if (license === 'Unlicense') {
      badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    } else if (license === 'WTFPL') {
      badge = '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)';
    } else if (license === 'Boost') {
      badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'Apache') {
      badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'MIT') {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'Eclipse') {
      badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
    } else if (license === 'MIT') {
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'None') {
      badge = '';

    }
    return badge
  },


  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  renderLicenseSection: function (license) { },

  // TODO: Create a function to generate markdown for README
  generateMarkdown: function (data) {
    console.log(data.projectUsage);
    return `

# ${data.project}

${this.renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test)
- [Questions](#questions)

## Installation

${data.install}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

If you have any questions feel free to either email me the question or create an issue on the Github Repo:

- [Project Github Repo](https://github.com/${data.github}/${data.project})

- My email: ${data.email}

## License

This project is using the ${data.license} license. Click the badge at the top of the page to go to that license documentation.
`;
  }
}

module.exports = generatePage;
