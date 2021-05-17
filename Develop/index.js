// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
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
        message: 'Enter your Email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'Enter the name of your project',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license you would like to use',
        choices: ['Unlicense', 'WTFPL', 'MIT', 'Boost', 'Apache', 'Eclipse', 'None']
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter a description of what to install in your project.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter who contributed to the project and if anyone else can contribute.',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter people who contributed!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter a description of how to test your project',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter how to test your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter a link to your live project',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Please enter a Link to your live project')
            }
        }
    },
    {
        type: 'input',
        name: 'author',
        message: 'Enter who the author(s) of the project',
        validate: authorInput => {
            if (authorInput) {
                return true;
            } else {
                console.log('Please enter the author or authors of the project!')
            }
        }  
    }
];




// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('./TheREADME.md', data, err => {
        if (err) throw err;

        console.log('README.md generated check out ')
    });
}

// TODO: Create a function to initialize app
const init = () => {


    inquirer
        .prompt(
            questions
        )
        .then(answers => {
        
            if (answers) {
                console.log('You did it!')
            } else {
               console.log('Something went wrong!');
            };

            const data = generate.generateMarkdown(answers)

            writeToFile(data);
        });
}

// Function call to initialize app
// init();

init()
