// TODO: Include packages, classes and file locations required for this application
const inquirer = require("inquirer");
const fs = require("fs")



//answers[] records the raw responses from each new member as they are added

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
           
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                when: () => currentNewMember === "team manager"
            },
        
        
        
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                when: () => currentNewMember === "engineer"
            },
        
            {
                type: 'input',
                name: 'school',
                message: "What school did the intern attend?",
                when: () => currentNewMember === "intern"
            }
           

        
    ])
        .then((response) => {
            answers.push(response);
            nextTeamMember()
    });
};



//nextTeamMember:
//1. Prompts the user to select whether to:
//a. add an engineer to the team, or
//b. add an intern to the team, or
//c. exit the process - if the user chooses the exit the process, buildTeam() is called.

const nextTeamMember = () => {
    inquirer.prompt(choices).then((response) => {
        switch (response.nextEmployee) {
            case "Engineer":
                currentNewMember = "engineer"
                employeeQuestions (currentNewMember)
                break;
            case "Intern":
                currentNewMember = "intern"
                employeeQuestions (currentNewMember)
                break;        
            default:
                buildTeam ();
        }
    });
};

//Choices list prompted by 'nextTeamMember'

const choices = [
    {
        type: 'list',
        name: 'nextEmployee',
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members."],
    }
];

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