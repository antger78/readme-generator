function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return `[![${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "GNU General Public License (GPL)":
      return `[![${license}](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

    case "MIT license":
      return `[![${license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    
    case "Mozilla Public License 2.0":
      return `[![${license}](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    default: return ``
  }
}

function generateMarkdown(content) {
  return `# ${content.title}

${renderLicenseBadge(content.license)}

  ## Description 
  
   ${content.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#Test)
  * [Contributions](#Contributions)
  * [License](#license)
  * [Questions](#Questions)
  
  
  ## Installation
  
  ${content.installationInstructions}
  
  ## Usage 
  
  ${content.usage}
  
  ## Test
  
  ${content.testInstructions}
  
  ## Contributions
  
  ${content.contributionGuidelines}
  
  ## License
  
  ${content.license}
  
  ## Questions
  
  If you have any questions, feel free to reach out to through either of the below channels at your own discresion and I will get back to you as soon as possible! 
  
  GitHub:  [${content.github}](https://github.com/${content.github})
  
  Email:  ${content.email}
  `;
}

module.exports = generateMarkdown;
