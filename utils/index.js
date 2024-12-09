import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// Array of questions to prompt the user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: (input) => (input ? true : 'Title cannot be empty.'),
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
    validate: (input) => (input ? true : 'Description cannot be empty.'),
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions for usage:',
    validate: (input) => (input ? true : 'Usage information cannot be empty.'),
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing:',
    default: 'Open a pull request to contribute.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
    validate: (input) => (input ? true : 'GitHub username cannot be empty.'),
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: (input) =>
      /\S+@\S+\.\S+/.test(input) ? true : 'Please enter a valid email.',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error('Error writing file:', err)
      : console.log('README.md generated successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

// Initialize the app
init();
