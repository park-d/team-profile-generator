// importing in the Employee parent class
const Employee = require('./Employee');

//extending Employee parent class for a Engineer employee with new "github"
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

// method to return the input github name
    getGithub() {
        return this.github;
    }

// new method for overwriting which type of employee it is, by returning the name of this current function
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;
