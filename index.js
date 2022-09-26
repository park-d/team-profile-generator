// importing dependencies
const inquirer = require("inquirer");
const fs = require("fs");

// importing constructor functions
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function buildTeam() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the team manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the team manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "What is the team manager's office number?",
            },
            {
                type: "list",
                name: "addTeamMem",
                message: "Which type of team member would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            },
        ])
        .then((addTeamMem) => {
            switch(addTeamMem.addTeamMem) {
                case "Engineer":
                    console.log("run a function that runs engineer questions");
                    break;
                case "Intern":
                    console.log("run a function that runs intern questions");
                    break;
                case "I don't want to add any more team members":
                    console.log("generate HTML");
                    break;
                default:
                    return;
        }
    })
};

buildTeam();
