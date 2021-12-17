// TODO: Include packages needed for this application
console.log('hello node');
const inquirer = require('inquirer');
const fs = require('fs');
// const { reject } = require('lodash');
// const { resolve } = require('path/posix');
// TODO: Create an array of questions for user input
// const questions = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'github',
//             message: 'What is your github username?',
//             validate: githubInput => {
//               if (githubInput){
//                 return true;
//               } else {
//                 console.log ('Please enter your github username!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//             validate: emailInput => {
//               if (emailInput){
//                 return true;
//               } else {
//                 console.log ('Please enter your github username!');
//                 return false;
//               }
//             }
//         },
//         {
//           type: 'input',
//           name: 'title',
//           message: 'What is the title of your project?',
//           validate: titleInput => {
//             if (titleInput){
//               return true;
//             } else {
//               console.log ('Please enter a title!');
//               return false;
//             }
//           }
//         },
//         {
//           type: 'input',
//           name: 'description',
//           message: 'Enter your Project Description',
//           validate: descriptionInput => {
//             if (descriptionInput){
//               return true;
//             } else {
//               console.log ('Please enter Project Description!');
//               return false;
//             }
//           }
//         },
//         {
//             type: 'input',
//             name: 'installationInstructions',
//             message: 'How do you install/implement this project?',
//             validate: installationInstructions => {
//               if (installationInstructions){
//                 return true;
//               } else {
//                 console.log ('Please give detailed instructions on how to implement this project!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'input',
//             name: 'usage',
//             message: 'How do you intend for a user to use this project?',
//             validate: usage => {
//               if (usage){
//                 return true;
//               } else {
//                 console.log ('Please give detailed instructions on how to use this project!');
//                 return false;
//               }
//             }
//           },
//         {
//             type: 'list',
//             name: 'licenses',
//             message: 'What license would you like to use? (Select one)',
//             choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0', 'Other']
//         },
//         {
//             type: 'input',
//             name: 'contributionGuidelines',
//             message: 'How would you like people to contribute to your project?',
//             validate: descriptionInput => {
//               if (descriptionInput){
//                 return true;
//               } else {
//                 console.log ('Please enter the contribution guidelines for your project!');
//                 return false;
//               }
//             }
//           },
//           {
//             type: 'input',
//             name: 'testInstructions',
//             message: 'How do you intend for a user to test this project?',
//             validate: usage => {
//               if (usage){
//                 return true;
//               } else {
//                 console.log ('Please give instructions on how to test this project!');
//                 return false;
//               }
//             }
//           },
//       ])
//     };

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {};

 function makeReadme(content) {
    return `# ${content.title}


## Description 

 ${content.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Methodology](#methodology)
* [License](#license)
  

## Installation

${content.installationInstructions}

## Usage 

${content.usage}

## Test Instructions

${content.testInstructions}

## Contribution Guidlines

${content.contributionGuidelines}

## License

${content.licenses}

## Questions?

${content.github}

GitHub:  ${content.github}

Email:  ${content.email}
`};

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: githubInput => {
              if (githubInput){
                return true;
              } else {
                console.log ('Please enter your github username!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
              if (emailInput){
                return true;
              } else {
                console.log ('Please enter your github username!');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'title',
          message: 'What is the title of your project?',
          validate: titleInput => {
            if (titleInput){
              return true;
            } else {
              console.log ('Please enter a title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter your Project Description',
          validate: descriptionInput => {
            if (descriptionInput){
              return true;
            } else {
              console.log ('Please enter Project Description!');
              return false;
            }
          }
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'How do you install/implement this project?',
            validate: installationInstructions => {
              if (installationInstructions){
                return true;
              } else {
                console.log ('Please give detailed instructions on how to implement this project!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'usage',
            message: 'How do you intend for a user to use this project?',
            validate: usage => {
              if (usage){
                return true;
              } else {
                console.log ('Please give detailed instructions on how to use this project!');
                return false;
              }
            }
          },
        {
            type: 'list',
            name: 'licenses',
            message: 'What license would you like to use? (Select one)',
            choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0', 'Other']
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'How would you like people to contribute to your project?',
            validate: descriptionInput => {
              if (descriptionInput){
                return true;
              } else {
                console.log ('Please enter the contribution guidelines for your project!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'testInstructions',
            message: 'How do you intend for a user to test this project?',
            validate: usage => {
              if (usage){
                return true;
              } else {
                console.log ('Please give instructions on how to test this project!');
                return false;
              }
            }
          },
      ])
    };

const writeFile = function(readMe) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateFile/README.md', readMe, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err){
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
          ok: true,
          message: 'File created!'
        });
    });
});
};

questions()      
.then(content => {
    var readMe = makeReadme(content);
    console.log('hello');
    writeFile(readMe)
  })
.catch(err => {
  console.log(err);
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// questions()  
// .then(content => {
//     readMe = makeReadme(content);
//   })
// .then(() => {writeFile()}
// )
// .catch(err => {
//   console.log(err);
// });
