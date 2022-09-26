// importing dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// importing constructor functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//importing function from other js files
const generateHTML = require("./src/generateHtml");

// array that will hold all of the data input from inquirer functions
const teamArr = [];

//function that starts the inquirer prompts, and after this gets filled out, the data is stored in a new Manager object and added to the teamArr, then the function that asks which other team members you want to add runs
function buildTeam() {
    console.log("\n\x1b[34m Welcome to the team generator!\n\n \x1b[34mPlease build your team:");
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: (input) => input ? true : console.log("\x1b[33m Name is required.")
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
                validate: (input) => {
                    if(!isNaN(input) && input) {
                        input = input;
                        return true;
                    } else {
                        console.log("\x1b[33m ID must be a number.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
                validate: (input) => {
                    if(input.includes(".", "@")) {
                        return true;
                    } else {
                        console.log("\x1b[33m Must enter an email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is the team manager's office number?",
                validate: (input) => input ? true : console.log("\x1b[33m Office number is required.")
            },
        ])
        .then((userInputs) => {
            const managerObj = new Manager(
                userInputs.managerName,
                userInputs.managerId,
                userInputs.managerEmail,
                userInputs.managerOfficeNum,);
            teamArr.push(managerObj);
            addAnotherMember();
        });
};

//function that starts the inquirer prompt for if they choose an engineer in the addAnotherMember function, and after this gets filled out, the data is stored in a new Engineer object and added to the teamArr, then the function that asks which other team members you want to add runs
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: (input) => input ? true : console.log("\x1b[33m Name is required.")
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID?",
                validate: (input) => {
                    if(!isNaN(input) && input) {
                        input = input;
                        return true;
                    } else {
                        console.log("\x1b[33m ID must be a number.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?",
                validate: (input) => {
                    if(input.includes(".", "@")) {
                        return true;
                    } else {
                        console.log("\x1b[33m Must enter an email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is your engineer's GitHub username?",
                validate: (input) => input ? true : console.log("\x1b[33m GitHub username is required.")
            },
        ])
        .then((userInputs) => {
            const engineerObj = new Engineer(
                userInputs.engineerName,
                userInputs.engineerId,
                userInputs.engineerEmail,
                userInputs.engineerGitHub,);
            teamArr.push(engineerObj);
            addAnotherMember();
        });
};

//function that starts the inquirer prompt for if they choose an intern in the addAnotherMember function, and after this gets filled out, the data is stored in a new Intern object and added to the teamArr, then the function that asks which other team members you want to add runs
function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: (input) => input ? true : console.log("\x1b[33m Name is required.")
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID?",
                validate: (input) => {
                    if(!isNaN(input) && input) {
                        input = input;
                        return true;
                    } else {
                        console.log("\x1b[33m ID must be a number.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?",
                validate: (input) => {
                    if(input.includes(".", "@")) {
                        return true;
                    } else {
                        console.log("\x1b[33m Must enter an email address.");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: (input) => input ? true : console.log("\x1b[33m School is required.")
            },
        ])
        .then((userInputs) => {
            const internObj = new Intern(
                userInputs.internName,
                userInputs.internId,
                userInputs.internEmail,
                userInputs.internSchool,);
            teamArr.push(internObj);
            addAnotherMember();
        });
};

//function that starts an inquirer prompt that asks which type of team member to add, then based on which is chosen, runs different function
function addAnotherMember() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addTeamMem",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            }
        ])
        .then((userInputs) => {
            switch(userInputs.addTeamMem) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "I don't want to add any more team members":
                    writeFile();
                    break;
                default:
                    return;
            }
        }
        );
};

//function that actually writes the html text to a new index.html file
const writeFile = () => {
    fs.writeFile("./dist/index.html", generateHTML.generateAllHtml(teamArr), (err) => {err ? console.error(err) : console.log("");});
};

//running the first function for the team builder
buildTeam();
