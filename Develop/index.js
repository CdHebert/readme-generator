// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const generateQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {

}

// TODO: Create a function to initialize app
const init = () => {

}

// Function call to initialize app
 // init();

 generateQuestions();
