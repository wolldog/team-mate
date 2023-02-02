// Packages, classes and file locations required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const generateHTML = require("./src/generateHtml")

//answersArray[] records the raw responses from each new member as they are added

const answers = [];

//teamArray[] records each new member once their class has been assigned

const teamArray = [];

//employeeQuestions prompts the user for answers to the questions associated with the Employee Class, then
//based on the value of variable 'currentNewEmployee' asks the role specific question
//responses are then pushed to answers[] and nextTeamMember() is called.

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
                //Asks question when 'currentNewMember is equal to "team manager"
                when: () => currentNewMember === "team manager"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                //Asks question when 'currentNewMember is equal to "engineer"
                when: () => currentNewMember === "engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school did the intern attend?",
                //Asks question when 'currentNewMember is equal to "intern"
                when: () => currentNewMember === "intern"
            }
        ])
    //Pushes respones to answers[] and calls nextTeamMember()
        .then((response) => {
            answers.push(response);
            nextTeamMember()
    });
};

//nextTeamMember:
//1. Prompts the user to select whether to:
//2. add an engineer to the team, or
//3. add an intern to the team, or
//4. exit the process - if the user chooses the exit the process, buildTeam() is called.

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

//buildTeam:
//1. loops over the 'answers' array and allocates each member to the correct class based on which specific
// question was answered.

const buildTeam = () => {
    answers.forEach((member) => {
        if(member.officeNumber) {
            const manager = new Manager(member.name, member.id, member.email, member.officeNumber);
            teamArray.push(manager); 
        } else if(member.github) {
            const engineer = new Engineer(member.name, member.id, member.email, member.github);
            teamArray.push(engineer);
        } else if(member.school) {
            const intern = new Intern(member.name, member.id, member.email, member.school);
            teamArray.push(intern);
        } else {
            console.log("Oops! something went wrong?")
        }
     });
     
//assigns html template 'generateHTML' and data held in teamArray[] to variable 'htmlcontent'.
const htmlcontent = generateHTML(teamArray)
//calls writeToFile with file to be created and content
writeToFile('./dist/index.html', htmlcontent)
};

//Function writes data to html document
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('You have successfully created an index.html file! You will find it in the "dist" folder')
)};

//Function initializes application 
function init() {
    let currentNewMember = "team manager";
    console.log("Please build your team")
    employeeQuestions (currentNewMember);
}

// Call to function 'init'
init();