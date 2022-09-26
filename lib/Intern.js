// importing in the Employee parent class
const Employee = require("./Employee");

//extending Employee parent class for an Intern employee with new "school"
class Intern extends Employee {
    constructor(inputName, id, email, school) {
        super(inputName, id, email);
        this.school = school;
    }

// method to return the input school
    getSchool() {
        return this.school;
    }

// new method for overwriting which type of employee it is, by returning the name of this current function
    getRole() {
        return Intern.name;
    }
}

module.exports = Intern;
