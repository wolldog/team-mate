// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

const answers = [];

const employeeQuestions = (currentNewMember) => {

    inquirer 
        .prompt ([ 
            {
                type: 'input',
                name: 'name',
                message: `What is the ${currentNewMember}'s name?`,
                
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the ${currentNewMember}'s ID?`,
                
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the ${currentNewMember}'s email?`,
                
            },
        
    ])
    .then((response) => {
        answers.push(response);
        console.log(answers)
    });
};
// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    let currentNewMember = "team manager";
    console.log("Please build your team")
    employeeQuestions (currentNewMember);
}

// Function call to initialize app
init();