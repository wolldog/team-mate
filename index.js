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
        employeeSpecific (currentNewMember);
    });
};

function employeeSpecific (currentNewMember) {
    switch (currentNewMember) {
        case "team manager":
            inquirer.prompt(managerQuestion).then((response) => {
                answers.push(response);  
            });
            break;
        case "engineer":
            inquirer.prompt(engineerQuestion).then((response) => {
                answers.push(response); 
            });
            break;
        case "intern":
            inquirer.prompt(internQuestion).then((response) => {
                answers.push(response); 
            });
            break;
        default:
            console.log("Something went wrong")
    };
}

const managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the team manager's office number?",
        
    }
]

const engineerQuestion = [
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        
    }
]

const internQuestion = [
    {
        type: 'input',
        name: 'school',
        message: "What school did the intern attend?",
        
    }
]



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