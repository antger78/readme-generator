// TODO: Include packages needed for this application
console.log('hello node');
const inquirer = require('inquirer');
const fs = require('fs');
const { reject } = require('lodash');
const { resolve } = require('path/posix');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateFile/README.md', fileContent, err => {
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

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        {
            type: 'list',
            name: 'licenses',
            message: 'What license would you like to use? (Select one)',
            choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
        },
        {
          type: 'confirm',
          name: 'confirmAbout',
          message: 'Would you like to enter some information about yourself for an "About" section?',
          default: true
        },
        {
          type: 'input',
          name: 'about',
          message: 'Provide some information about yourself:',
          when: ({ confirmAbout }) => {
            if (confirmAbout){
            return true;
          } else {
            return false;
          }
        }
      }
      ])
    };

questions()

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
