// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const generateQuestions = () => {
    return inquirer.prompt([
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
            validate: descriptionInput => {
                if (descriptionInput) {
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
            validate: descriptionInput => {
                if (descriptionInput) {
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
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter how to test your project!');
                    return false;
                }
            }
        },
    ])
    .then(questionData => {
        const { github, email} = questionData;
        writeToFile();
    })
};


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
fs.writeFile('./utils/README.md', data, err => {
    if (err) throw err;

    console.log('README.md generated check out ')
});
}

// TODO: Create a function to initialize app
const init = () => {

}

// Function call to initialize app
 // init();

init()
.then()
