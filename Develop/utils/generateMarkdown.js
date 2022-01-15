// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// const generatePage = {
renderLicenseBadge = (license) => {

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
  // renderLicenseSection: function (license) { },

  // TODO: Create a function to generate markdown for README
  generateMarkdown = (data) => {
    licenseContainer = renderLicenseBadge(data.license);
    return `

# ${data.project}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Contributing](#contributing)
- [Tests](#test)
- [Links](#links)
- [Questions](#questions)
- [License](#license)

## Installation

${data.install}

## Contributing

${data.contributing}

## Tests

${data.test}

## Links

${data.link}

## Questions

If you have any questions feel free to either email me the question:

- My email: ${data.email}

## License

${licenseContainer}

## Author

${data.author}

`;
  }
// }

module.exports = generateMarkdown;
