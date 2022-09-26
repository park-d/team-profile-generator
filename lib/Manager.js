// importing in the Employee parent class
const Employee = require("./Employee");

//extending Employee parent class for a Manager employee with new "officeNumber"
class Manager extends Employee {
    constructor(inputName, id, email, officeNumber) {
        super(inputName, id, email);
        this.officeNumber = officeNumber;
    }
// new method for overwriting which type of employee it is, by returning the name of this current function 
    getRole() {
        return Manager.name;
    }
}

module.exports = Manager;
